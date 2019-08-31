#!/bin/sh

# ------------------------------
# Este script copia por SCP los
# ficheros que han cambiado entre dos commits.
# ------------------------------

WORKSPACE_PATH=/home/cprietom/workspace
PROJECT_NAME=coleccioncuacua.com
LOCAL_HOME=/home/cprietom
DIFF_OUTPUT_FILE=git_diffs.txt

REMOTE_USER=colecWB7U
REMOTE_HOST=coleccioncuacua.com.mialias.net
REMOTE_FOLDER=web

usage() {
   echo "GAME OVER!\n uso: $0 INITIAL_COMMIT [FINAL_COMMIT]"
}

if [ $# -lt 1 ]; then
    usage
    exit 1
fi

if [ ! -d $WORKSPACE_PATH ]; then
	echo "GAME OVER!\nERROR: No existe el directorio $WORKSPACE_PATH. Asigna el valor correcto a WORKSPACE_PATH"
	exit 1
fi

if [ ! -d $WORKSPACE_PATH/$PROJECT_NAME ]; then
	echo "GAME OVER!\nERROR: No existe el directorio $PROJECT_NAME en $WORKSPACE_PATH. Asigna el valor correcto a PROJECT_NAME"
	exit 1
fi

if [ ! -d $LOCAL_HOME ]; then
	echo "GAME OVER!\nERROR: No existe el directorio $LOCAL_HOME en el que se creará el fichero . Asigna el valor correcto en el script"
	exit 1
fi


INITIAL_COMMIT=$1
FINAL_COMMIT=${2:-HEAD}

if [ -f $LOCAL_HOME/$DIFF_OUTPUT_FILE ]; then
	echo "Eliminando fichero $LOCAL_HOME/$DIFF_OUTPUT_FILE ..."
	#truncate -s 0 $LOCAL_HOME/$DIFF_OUTPUT_FILE
	rm $LOCAL_HOME/$DIFF_OUTPUT_FILE
	if [ -f $LOCAL_HOME/$DIFF_OUTPUT_FILE ]; then
		echo "GAME OVER!\n ERROR: ¡¡¡ No se ha podido eliminar el fichero $LOCAL_HOME/$DIFF_OUTPUT_FILE !!!"
		exit 1
	else
		echo "... fichero $LOCAL_HOME/$DIFF_OUTPUT_FILE eliminado con éxito."
	fi
fi

echo "Generando el fichero $LOCAL_HOME/$DIFF_OUTPUT_FILE con los cambios entre los commits $INITIAL_COMMIT y $FINAL_COMMIT ..."
git --git-dir=$WORKSPACE_PATH/$PROJECT_NAME/.git diff --name-only $INITIAL_COMMIT HEAD > $LOCAL_HOME/$DIFF_OUTPUT_FILE

if [ -f $LOCAL_HOME/$DIFF_OUTPUT_FILE ]; then
	if [ ! -s $LOCAL_HOME/$DIFF_OUTPUT_FILE ]; then
        echo "GAME OVER!\n WARN: ... no se han detectado cambios entre $INITIAL_COMMIT y $FINAL_COMMIT"
        exit 1
	else
		echo "... fichero $LOCAL_HOME/$DIFF_OUTPUT_FILE generado con éxito."
	fi
else
	echo "GAME OVER!\n ERROR: ... no se ha podio generar el fichero"
	exit 1
fi

echo "Copiando de $WORKSPACE_PATH/$PROJECT_NAME a $REMOTE_HOST:/$REMOTE_FOLDER ..."
while read line; do
  if echo $line | grep -q "$REMOTE_FOLDER"; then
  	echo "scp -2 $WORKSPACE_PATH/$PROJECT_NAME/$line $REMOTE_USER@$REMOTE_HOST:/$line"
#  scp -2 $WORKSPACE_PATH/$PROJECT_NAME/$line $REMOTE_USER@$REMOTE_HOST:/$line
  fi
done < $LOCAL_HOME/$DIFF_OUTPUT_FILE

echo "ALL RIGHT !!"
echo "THIS IS THE END... MY ONLY FRIEND... THE END"
exit 0

