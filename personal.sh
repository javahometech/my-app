#!/bin/bash
cd /Users/mohanreddybandarupalle/Personal/my-app
if [[ $(git push) ]]
then 
echo "push executed success"
else
echo "push not executed"
fi
