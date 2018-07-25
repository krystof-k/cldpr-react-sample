# Contributing policy

This guide presents rules and processes of working on React components for Cloudaper design system.

## Git & GitHub

If you're not familiar with Git, it's a good idea to go through the [Pro Git](https://git-scm.com/book/en/v2) book to learn about it or at least complete the [tutorial by GitHub](https://try.github.io).

### Repositories & branches

This – **[cloudaper / react](https://github.com/cloudaper/react)** – is the main repository. It contains especially those branches:

- `master` branch, which is the most recent, approved, fine-tuned, *production ready* version of the components,
- `gh-pages` branch, which contains the latest React components styleguide: [React Styleguidist](https://react-styleguidist.js.org) build of the `master` branch and
- `release/*` branches, which contains [releases](RELEASING.md).

Everyone is encouraged to create own fork of the main repository where work-in-progress can be pushed and available to everyone. However, pull requests should be created only from branches pushed to the main repository, so that other collaborators can make pull requests against other opened pull requests.

Create appropriate names for your branches:

- use `snake-case` *(except component names)*,
- start the branch name with an imperative verb (in the same way as [commit messages](#commits)),
- when adding new or updating existing component, prefix the branch name with `component/ComponentName/`,
- when updating documentation or making system changes, prefix the branch name with `docs/` or `system/` respectively
- when releasing, prefix the branch name with `release/` and
- when solving an issue, prefix the name (after the slash when applicable) with `issue-` followed by the ID of the issue.

E.g.:

```
component/Button/add-component
component/TextField/issue-11-add-error-message
component/RoundButton/issue-25-fix-round-button-hover
docs/update-contributing-policy
system/add-eslint-and-prettier
```

### Pull requests & commits

`master` branch protection is enabled, therefore all commits have to be submitted through a [reviewed](#reviews) pull request which has passed all the checks. *Never push directly to master, even if your admin privileges allows you to do so.*

Prefix the pull request with the component name in brackets, for example `[TextField] Add error message`, if applicable.

#### Commits

Pull request comes with one or more commits that should make sense as a standalone change. Always make smaller and more pull request rather than just a one big.

The commit message should start with an imperative verb such as *add*, *fix*, *change* or *remove* with a decent description following. If the commit is solves an issue (as it most of the times should), reference to that issue has to be added after the message in parentheses using a [correct keyword](https://help.github.com/articles/closing-issues-using-keywords/) to automatically close the issue, such as `(closes #11)` or `(fixes #11)`. For a related issues use a keyword related: `(fixes #25, related #11)`.

If further description is needed, it should be added below the headline separated by a blank line. The description comes as a normal paragraph with interpunction.

E.g.:

```
Add button component (closes #11)
```

or:

```
Fix button hover state (fixes #25)

Button hover now works also when the button is focused.
```

If multiple commits in a pull request solve one issue together, the keywords above should be used in the pull request description. It's, of course, possible to close multiple issues with one pull request or commit by mentioning multiple issues (attention that you need to repeat the keyword: `closes #11 and closes #25`).

If the work is nicely split into meaningful commits it can be merged directly (via merge commit). If not, commits need to be squashed into one (or a few) before merging. Squashing should be done by the PR author before final review.

#### Reviews

Each pull request has to be reviewed before merging. In cases when the pull request is of a purely technical nature, at least one [@frontend-maintainers](https://github.com/orgs/cloudaper/teams/frontend-maintainers) team member's review is required. In case the pull request implements or changes visual or interaction design, at least one of [@design](https://github.com/orgs/cloudaper/teams/design) team member's review is required too.

Technical reviewers are added automatically according to the [CODEOWNERS](CODEOWNERS) file, design reviewers should be added manually if the rule above is met.

#### Labels

Pull requests have following labels:

- **Status**
  - **in progress**

    The pull request is not finished yet and should not be merged, no matter what the reviews said.

  - **on hold**

    The pull request is blocked and cannot be finished/merged due to the reason mentioned in the comments.

- **Type**

  *If pull request originated from an issue(s), the original labels matching the issue(s) should be reflected if still valid.*
  - **new component**
  - **enhancement**
  - **system**
  - **bug**
  - **refactoring**
  - **docs**

#### What to do after creating a pull request

- [ ] add yourself as assignee
- [ ] add appropriate labels, especially *in progress* if PR is not ready for review yet
- [ ] add [@design](https://github.com/orgs/cloudaper/teams/design) team as a reviewer if any design change was made
- [ ] make sure all builds and tests passes on the CI
- [ ] include a new entry in [CHANGELOG.md](../CHANGELOG.md) file if you think the addition is important

#### Merging pull requests

Pull request should be merged exclusively by a [@frontend-maintainers](https://github.com/orgs/cloudaper/teams/frontend-maintainers) team member. It may be merged only when it has all the needed approvals and all the checks passed.

Pull request should be always merged via merge commit ([learn more](https://help.github.com/articles/about-pull-request-merges) about types of merges). If commit history is not pretty, the commits have to be properly squashed before merging.

After merging the PR, don't forget to delete the branch—unless you are [releasing](RELEASING.md).
