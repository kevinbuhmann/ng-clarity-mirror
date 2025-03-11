COMMIT_SHA=$(git log -1 --format='%H')

# configure git
git config user.name "Clarity Update Bot"
git config user.email "noreply@github.com"

# fetch prebuilt branch remotes
git fetch origin main-prebuilt-clr-ui
git fetch origin main-prebuilt-clr-angular

# add worktrees
git worktree add --track -b main-prebuilt-clr-ui main-prebuilt-clr-ui origin/main-prebuilt-clr-ui
git worktree add --track -b main-prebuilt-clr-angular main-prebuilt-clr-angular origin/main-prebuilt-clr-angular

# delete old files
rm -rf ./main-prebuilt-clr-ui/*
rm -rf ./main-prebuilt-clr-angular/*

# copy new files
cp -r ./dist/clr-ui/* ./main-prebuilt-clr-ui
cp -r ./dist/clr-angular/* ./main-prebuilt-clr-angular

# push @clr/ui
pushd ./main-prebuilt-clr-ui
git add .
git commit -m "update build for commit $COMMIT_SHA"
git push origin main-prebuilt-clr-ui:main-prebuilt-clr-ui
popd

# push @clr/angular
pushd ./main-prebuilt-clr-angular
git add .
git commit -m "update build for commit $COMMIT_SHA"
git push origin main-prebuilt-clr-angular:main-prebuilt-clr-angular
popd
