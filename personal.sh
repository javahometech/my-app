#!/bin/bash
cd /Users/mohanreddybandarupalle/Personal/my-app
if [[ $(git submodule deinit -f Terraform-2019jun) ]]
then 
rm -rf .git/modules/Terraform-2019juns
git rm -f privacy-commons
git commit -a -m 'Deleted privacy-commom submodule  system date'
git push
echo "executed success"
else
echo "submodule not deleted"
fi
