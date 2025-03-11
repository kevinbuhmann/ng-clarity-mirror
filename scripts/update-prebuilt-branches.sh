# add worktrees
git worktree add --track -b main-clr-ui-prebuilt main-clr-ui-prebuilt origin/main-clr-ui-prebuilt
git worktree add --track -b main-clr-angular-prebuilt main-clr-angular-prebuilt origin/main-clr-angular-prebuilt

# delete old files
rm -rf ./main-clr-ui-prebuilt/*
rm -rf ./main-clr-angular-prebuilt/*

# copy new files
cp -r ./dist/clr-ui/* ./main-clr-ui-prebuilt
cp -r ./dist/clr-angular/* ./main-clr-angular-prebuilt

# push @clr/ui
pushd ./main-clr-ui-prebuilt
git add .
git commit -m "update build"
git push origin main-clr-ui-prebuilt:main-clr-ui-prebuilt
popd

# push @clr/angular
pushd ./main-clr-angular-prebuilt
git add .
git commit -m "update build"
git push origin main-clr-angular-prebuilt:main-clr-angular-prebuilt
popd
