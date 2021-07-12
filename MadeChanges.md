# Making Changes

If youve made changes to a function you need to test it localy and then deploy it to aws. Changes made to functions wont effect requests to URL endpoints until they are deployed but dont deploy broken code.

## Local Testing

RUN: npx sls invoke -f *name of the function* --path *path to the mock.json of the function*

## Deployment

If you have only changed one or two functions.

- RUN: sls deploy function -f *name of the function*
  
If you have made many changes or any structural changes.

- RUN: sls deploy
