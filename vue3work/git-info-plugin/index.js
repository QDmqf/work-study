const { GitRevisionPlugin } = require("git-revision-webpack-plugin");
const gitRevisionPlugin = new GitRevisionPlugin({
  branchCommand: "name-rev --name-only HEAD",
});

const nowDate = new Date();
const buildDate = `${nowDate.getFullYear()}-${
  nowDate.getMonth() + 1
}-${nowDate.getDate()} ${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`;

function setMetaToOptions(options) {
  const content = `git-commit-hash=${JSON.stringify(
    gitRevisionPlugin.commithash()
  )},git-branch=${JSON.stringify(
    gitRevisionPlugin.branch()
  )},build-date=${buildDate}`.replace(/"/g, "");
  options[0].meta = {
    "git-version": content,
    pragma: { "http-equiv": "pragma", content: "no-cache" },
    "cache-control": { "http-equiv": "cache-control", content: "no-cache" },
    expires: { "http-equiv": "expires", content: "0" },
  };
  return options;
}

function setGitVersionToMeta(config, entry) {
  console.log(config.plugin);
  debugger;
  const isSinglePage = entry === undefined;
  if (isSinglePage) {
    config.plugin("html").tap((args) => {
      return setMetaToOptions(args);
    });
  } else {
    entry.forEach((name) => {
      config.plugin("html-" + name).tap((args) => {
        return setMetaToOptions(args);
      });
    });
  }
}

module.exports = {
  setGitVersionToMeta,
  setMetaToOptions,
};
