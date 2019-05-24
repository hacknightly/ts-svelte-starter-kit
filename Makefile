BIN=./node_modules/.bin

dev:
	${BIN}/tsc &&\
  ${BIN}/rollup -c -w& ${BIN}/sirv public --dev

build:
	${BIN}/rollup -c

start:
	${BIN}/sirv public
