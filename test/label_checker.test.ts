import { LabelChecker } from "../src/plugins/LabelChecker/label_checker";
import { makePRContext } from "./fixtures/contexts/pull_request";
import { mockCreateCommitStatus } from "./mocks";

describe("Label Checker", () => {
  beforeEach(() => {
    mockCreateCommitStatus.mockReset();
  });

  test("no labels", async () => {
    const context = makePRContext({ labels: [] });
    await new LabelChecker(context).checkLabels();
    expect(mockCreateCommitStatus).toBeCalledTimes(2);
    expect(mockCreateCommitStatus.mock.calls[0][0].state).toBe("pending");
    expect(mockCreateCommitStatus.mock.calls[1][0].state).toBe("failure");
    expect(mockCreateCommitStatus.mock.calls[1][0].description).toBe(
      "Missing category & breaking labels"
    );
  });

  test("no breaking, one category", async () => {
    const context = makePRContext({ labels: ["bug"] });
    await new LabelChecker(context).checkLabels();
    expect(mockCreateCommitStatus).toBeCalledTimes(2);
    expect(mockCreateCommitStatus.mock.calls[0][0].state).toBe("pending");
    expect(mockCreateCommitStatus.mock.calls[1][0].state).toBe("failure");
    expect(mockCreateCommitStatus.mock.calls[1][0].description).toBe(
      "Missing breaking label"
    );
  });

  test("no category, one breaking", async () => {
    const context = makePRContext({ labels: ["breaking"] });
    await new LabelChecker(context).checkLabels();
    expect(mockCreateCommitStatus).toBeCalledTimes(2);
    expect(mockCreateCommitStatus.mock.calls[0][0].state).toBe("pending");
    expect(mockCreateCommitStatus.mock.calls[1][0].state).toBe("failure");
    expect(mockCreateCommitStatus.mock.calls[1][0].description).toBe(
      "Missing category label"
    );
  });

  test("many breaking, one category", async () => {
    const context = makePRContext({
      labels: ["breaking", "non-breaking", "bug"],
    });
    await new LabelChecker(context).checkLabels();
    expect(mockCreateCommitStatus).toBeCalledTimes(2);
    expect(mockCreateCommitStatus.mock.calls[0][0].state).toBe("pending");
    expect(mockCreateCommitStatus.mock.calls[1][0].state).toBe("failure");
    expect(mockCreateCommitStatus.mock.calls[1][0].description).toBe(
      "Too many breaking labels applied"
    );
  });

  test("many category, one breaking", async () => {
    const context = makePRContext({
      labels: ["bug", "improvement", "breaking"],
    });
    await new LabelChecker(context).checkLabels();
    expect(mockCreateCommitStatus).toBeCalledTimes(2);
    expect(mockCreateCommitStatus.mock.calls[0][0].state).toBe("pending");
    expect(mockCreateCommitStatus.mock.calls[1][0].state).toBe("failure");
    expect(mockCreateCommitStatus.mock.calls[1][0].description).toBe(
      "Too many category labels applied"
    );
  });

  test("many breaking, no category", async () => {
    const context = makePRContext({
      labels: ["non-breaking", "breaking"],
    });
    await new LabelChecker(context).checkLabels();
    expect(mockCreateCommitStatus).toBeCalledTimes(2);
    expect(mockCreateCommitStatus.mock.calls[0][0].state).toBe("pending");
    expect(mockCreateCommitStatus.mock.calls[1][0].state).toBe("failure");
    expect(mockCreateCommitStatus.mock.calls[1][0].description).toBe(
      "Missing category label & too many breaking labels applied"
    );
  });

  test("many category, many breaking", async () => {
    const context = makePRContext({
      labels: ["bug", "improvement", "breaking", "non-breaking"],
    });
    await new LabelChecker(context).checkLabels();
    expect(mockCreateCommitStatus).toBeCalledTimes(2);
    expect(mockCreateCommitStatus.mock.calls[0][0].state).toBe("pending");
    expect(mockCreateCommitStatus.mock.calls[1][0].state).toBe("failure");
    expect(mockCreateCommitStatus.mock.calls[1][0].description).toBe(
      "Too many category & breaking labels applied"
    );
  });

  test("no breaking, many category", async () => {
    const context = makePRContext({
      labels: ["bug", "improvement"],
    });
    await new LabelChecker(context).checkLabels();
    expect(mockCreateCommitStatus).toBeCalledTimes(2);
    expect(mockCreateCommitStatus.mock.calls[0][0].state).toBe("pending");
    expect(mockCreateCommitStatus.mock.calls[1][0].state).toBe("failure");
    expect(mockCreateCommitStatus.mock.calls[1][0].description).toBe(
      "Missing breaking label & too many category labels applied"
    );
  });

  test("correct labels", async () => {
    const context = makePRContext({ labels: ["bug", "breaking"] });
    await new LabelChecker(context).checkLabels();
    expect(mockCreateCommitStatus).toBeCalledTimes(2);
    expect(mockCreateCommitStatus.mock.calls[0][0].state).toBe("pending");
    expect(mockCreateCommitStatus.mock.calls[1][0].state).toBe("success");
    expect(mockCreateCommitStatus.mock.calls[1][0].description).toBe(
      "Correct labels applied"
    );
  });

  test("correct labels - forward merge PR", async () => {
    const context = makePRContext({
      title: "[gpuCI] Auto-merge branch-0.18 to branch-0.19 [skip ci]",
      user: "GPUtester",
    });
    await new LabelChecker(context).checkLabels();
    expect(mockCreateCommitStatus).toBeCalledTimes(2);
    expect(mockCreateCommitStatus.mock.calls[0][0].state).toBe("pending");
    expect(mockCreateCommitStatus.mock.calls[0][0].description).toBe(
      "Checking labels..."
    );
    expect(mockCreateCommitStatus.mock.calls[1][0].state).toBe("success");
    expect(mockCreateCommitStatus.mock.calls[1][0].description).toBe(
      "No labels necessary for forward-merging PRs"
    );
  });

  test("correct labels - release PR", async () => {
    const context = makePRContext({
      title: "[RELEASE] cuml v0.18",
      user: "GPUtester",
    });
    await new LabelChecker(context).checkLabels();
    expect(mockCreateCommitStatus).toBeCalledTimes(2);
    expect(mockCreateCommitStatus.mock.calls[0][0].state).toBe("pending");
    expect(mockCreateCommitStatus.mock.calls[0][0].description).toBe(
      "Checking labels..."
    );
    expect(mockCreateCommitStatus.mock.calls[1][0].state).toBe("success");
    expect(mockCreateCommitStatus.mock.calls[1][0].description).toBe(
      "No labels necessary for release PRs"
    );
  });
});
