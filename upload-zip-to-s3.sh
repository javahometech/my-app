#!/bin/bash
wget https://files.pythonhosted.org/packages/bb/6f/b1cc499417b026693f05c824dde689dae7a9c47661f4caaf4e916a51edab/pymssql-2.2.5-cp39-cp39-manylinux_2_5_
x86_64.manylinux1_x86_64.whl
mkdir python
pip3 install pymssql-2.2.5-cp39-cp39-manylinux_2_5_x86_64.manylinux1_x86_64.whl -t ./python
zip -r pymssql39.zip ./python
aws s3 cp pymssql39.zip s3://javahome-hari/
