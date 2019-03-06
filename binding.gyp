{
"make_global_settings": [
	["CXX",  "../node_modules/nbind/bin/g++"],
	["LINK", "../node_modules/nbind/bin/g++"]
],
	"targets": [
		{
			"includes": [
				"auto.gypi"
			],
			"sources": [
				"JS_HeartRate.cpp"
			],
			"libraries": [ "/home/pi/max30102-rpi/libheartrate.so" ],
			"conditions": [
				["OS in 'linux freebsd openbsd solaris aix'", {
					"cflags": [ "-lpthread" ],
					"ldflags": [ "-lpthread" ]
				}]
			]
		}
	],
	"includes": [
		"auto-top.gypi"
	]
}
