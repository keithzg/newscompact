app_name=newscompact
build_directory=build/
package_name=$(build_directory)$(app_name)

all: dist

clean:
	rm -rf $(build_directory)

dist: clean
	mkdir -p $(build_directory)
	git archive HEAD --format=zip --prefix=$(app_name)/ > $(package_name).zip

