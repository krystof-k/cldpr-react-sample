# Releasing guide & policy

This repository, specifically its `release/*` branches, also serves as a place for production builds.

## Versioning

This project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html): `MAJOR.MINOR.PATCH`. However, until all basic components are developed, we will keep the major version on zero.

The Git tag format is prefixed with v: `vMAJOR.MINOR.PATCH`. Branch name is always with `x` instead of a patch version number: `vMAJOR.MINOR.x`.

## Changelog

We keep a separate changelog in the [CHANGELOG.md](../CHANGELOG.md) file. This changelog follows the principles of the [Keep a Changelog](https://keepachangelog.com) iniciative:

> - Changelogs are for humans, not machines.
> - There should be an entry for every single version.
> - The same types of changes should be grouped.
> - Versions and sections should be linkable.
> - The latest version comes first.
> - The release date of each version is displayed.

When adding a new entry to changelog:

- start it with an imperative verb like *add*, *change*, *deprecate*, *remove* or *fix*
- add reference to the related issues and/or pull requests (issues come first)
- classify it into the correct category of *breaking changes*, *security*, *new features*, *system*, *fixes* (in this order)

E.g.:

```markdown
- Add RoundButton component ([#11](https://github.com/cloudaper/react/issues/11), [#25](https://github.com/cloudaper/react/pull/25))
```

Each release heading should contain link to the GitHub release:

```markdown
## [v1.2.5](https://github.com/cloudaper/react/releases/tag/v1.2.5) 2018-07-10
```

Keep an *Unreleased* section at the top to track upcoming changes:

```markdown
## *Unreleased*
```

The changelog is ordered chronologically, that means even when releasing a backport version, it should come on top of version with already higher version number.

## Git tags & GitHub releases

To keep better track of releases, Git tags are used to mark the latest commit in release (preferably the one with *package.json* version bump). Git tags are then used to draft [GitHub releases](https://github.com/cloudaper/react/releases). When drafting a GitHub release, respective section of [CHANGELOG.md](../CHANGELOG.md) is always included to release notes, optionally with further information which shouldn't be included in the changelog.

## Releasing process step by step

1. Ensure `master` branch should be truly released.
2. Create new branch `release/vX.Y.x` from `master`.

   If making a patch release, the release branch already exists. Just checkout the existing branch and merge changes from master:

   ```shell
   git checkout master
   git pull origin master
   git checkout release/vX.Y.x
   git pull origin release/vX.Y.x
   git merge master --no-edit
   ```
3. Rename the *Unreleased* header to the release with today's date in [CHANGELOG.md](../CHANGELOG.md).
4. Commit updated changelog:
   ```shell
   git stage CHANGELOG.md
   git commit -am 'Add release to the changelog'
   ```
5. Run:

   ```shell
   yarn config set version-git-message 'Bump version to %s'
   ```

   *This is saved to your Yarn configuration, you don't have to run it always actually.*
6. Bump the actual version in package.json using [`yarn version`](https://yarnpkg.com/lang/en/docs/cli/version) command:

   ```shell
   yarn version --new-version X.Y.x
   ```

   which also commits the change and adds the correct Git tag.

   *Pro-tip: you can run just `yarn version --patch`, `yarn version --minor` or `yarn version --major` to increment the version number.*
7. Push the release branch and the tag to the remote repository:

   ```shell
   git push origin release/vX.Y.x
   git push origin --tags
   ```

   *Git tags are not pushed automatically with commits to remotes and separate `git push origin --tags` call is necessary.*
8. Create the GitHub release from the tag (see [above](#git-tags-github-releases)).
9. Create a PR and wait until it is merged to `master` by the [standard procedure](CONTRIBUTING.md)—don't delete the release branch after merging!
10. Merge `master` to `release/latest` and push:

   ```shell
   git checkout master
   git pull origin master
   git checkout release/latest
   git pull origin release/latest
   git merge master --no-edit
   git push origin release/latest
   ```
11. After push to `release/latest`, the branch is automatically built and the build is pushed back to the branch by the CI.
12. And just for safety, enable branch protection on the release branch (`release/vX.Y.x`).

## Backport releases

There may be a need for a patch release for an older version than the current one in `release/latest` branch.

In that case, the workflow above is slightly modified. You switch to the release branch (`release/vX.Y.x`) of the release you want to patch, commit changes, bump the version, create tag and push. Then create new branch `release/vX.Y.Z` (note the correct patch version number now, not `x`), which is an analogy to the `release/latest` branch, and push. CI builds the branch and it can be directly used in production.
