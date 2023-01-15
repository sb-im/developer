.PHONY: default
default: all

.PHONY: all
all: update gosd

.PHONY: run
run:
	python3 -m http.server 8888

.PHONY: update
update:
	git submodule foreach git pull origin master

.PHONY: gosd
gosd:
	cp gosd/docs/lua.md gosd_lua.md
	cp gosd/docs/mqtt.md gosd_mqtt.md

