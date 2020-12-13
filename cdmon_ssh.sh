#!/bin/sh

# ------------------------------
# Este script copia por SCP los
# ficheros que han cambiado entre dos commits.
# ------------------------------

REMOTE_USER=colecWB7U
REMOTE_HOST=coleccioncuacua.com.mialias.net
REMOTE_FOLDER=/web

ssh -t -l $REMOTE_USER $REMOTE_HOST "cd $REMOTE_FOLDER; bash"
