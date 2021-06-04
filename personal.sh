#!/bin/bash
cd /Users/mohanreddybandarupalle/Personal/my-app
if [[ $(git pull ]]
then 
git push
echo "push executed success"
else
echo "push not deleted"
fi
