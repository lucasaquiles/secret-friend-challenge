package com.dev4fun.secretfriendapi

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan

@ComponentScan("com.dev4fun.secretfriendapi.mapstruct")
@SpringBootApplication
class SecretFriendApiApplication

fun main(args: Array<String>) {
	runApplication<SecretFriendApiApplication>(*args)
}
