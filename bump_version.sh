#!/bin/bash

# This script bumps the version number in the package.json file
# accepts <major|minor|patch> as the first argument
# ex. ./bump_version.sh patch

# Get the current version number
VERSION=$(node -p -e "require('./package.json').version")

# Get the first argument passed to the script
# This will be the version bump type
BUMP=${1:-"patch"} # default to patch

# Split the version number into an array
# This will create an array like: ['1', '2', '3']
VERSION_BITS=(${VERSION//./ })

# Get the version bump type
# This will be one of: major, minor, or patch
BUMP_TYPE=${BUMP:-${VERSION_BITS[0]}}
echo "Bumping version number from $VERSION..."

# Increment the version number based on the bump type
case $BUMP_TYPE in
major)
    VERSION_BITS[0]=$((VERSION_BITS[0] + 1))
    VERSION_BITS[1]=0
    VERSION_BITS[2]=0
    ;;
minor)
    VERSION_BITS[1]=$((VERSION_BITS[1] + 1))
    VERSION_BITS[2]=0
    ;;
patch)
    VERSION_BITS[2]=$((VERSION_BITS[2] + 1))
    ;;
*)
    echo "Usage: bump_version.sh <major|minor|patch>"
    exit 1
    ;;
esac

# Join the version number array back into a string
# This will create a string like: '1.2.3'
NEW_VERSION="${VERSION_BITS[0]}.${VERSION_BITS[1]}.${VERSION_BITS[2]}"

# Update the version number in the package.json file
npm version $NEW_VERSION --no-git-tag-version

# Output the new version number
echo "Updated package.json to version $NEW_VERSION"
