package com.dev4fun.secretfriendapi.controller


import com.dev4fun.secretfriendapi.domain.Event
import com.dev4fun.secretfriendapi.service.EventService
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid


@Validated
@RestController
class EventController(private val eventService: EventService){

    @PostMapping
    fun save(@RequestBody @Valid eventRequest: EventRequest) : ResponseEntity<Event>{

        val createdEvent: Event? = eventService.save(eventRequest)

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(createdEvent)
    }
}