#!/usr/bin/env bash
KEYSTORE=${1:-openlms-release-key.jks}
ALIAS=${2:-openlms_key}
KEYPASS=${3:-changeit}
STOREPASS=${4:-changeit}
keytool -genkeypair -v -keystore "$KEYSTORE" -alias "$ALIAS" -keyalg RSA -keysize 2048 -validity 10000 -storepass "$STOREPASS" -keypass "$KEYPASS" -dname "CN=OpenLMS, OU=Dev, O=YourOrg, L=City, S=State, C=US"
base64 -w 0 "$KEYSTORE"
