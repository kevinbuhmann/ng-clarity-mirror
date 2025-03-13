# configure git
git config user.name "Clarity Update Bot"
git config user.email "noreply@github.com"

# fetch prebuilt branch remotes
git fetch origin prebuilt/$GIT_BRANCH/clr-ui
git fetch origin prebuilt/$GIT_BRANCH/clr-angular

# add worktrees
git worktree add --track -b prebuilt/$GIT_BRANCH/clr-ui prebuilt/$GIT_BRANCH/clr-ui origin/prebuilt/$GIT_BRANCH/clr-ui
git worktree add --track -b prebuilt/$GIT_BRANCH/clr-angular prebuilt/$GIT_BRANCH/clr-angular origin/prebuilt/$GIT_BRANCH/clr-angular

# delete old files
rm -rf ./prebuilt/$GIT_BRANCH/clr-ui/*
rm -rf ./prebuilt/$GIT_BRANCH/clr-angular/*

# copy new files
cp -r ./dist/clr-ui/* ./prebuilt/$GIT_BRANCH/clr-ui
cp -r ./dist/clr-angular/* ./prebuilt/$GIT_BRANCH/clr-angular

# push @clr/ui
pushd ./prebuilt/$GIT_BRANCH/clr-ui
git add .
git commit -m "update build for commit $GIT_COMMIT_SHA"
git push origin prebuilt/$GIT_BRANCH/clr-ui:prebuilt/$GIT_BRANCH/clr-ui
popd

# push @clr/angular
pushd ./prebuilt/$GIT_BRANCH/clr-angular
git add .
git commit -m "update build for commit $GIT_COMMIT_SHA"
git push origin prebuilt/$GIT_BRANCH/clr-angular:prebuilt/$GIT_BRANCH/clr-angular
popd
