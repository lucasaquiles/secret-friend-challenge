package com.dev4fun.secretfriendapi.service

import com.dev4fun.secretfriendapi.repository.EventRepository
import com.dev4fun.secretfriendapi.controller.EventRequest
import com.dev4fun.secretfriendapi.domain.Event
import com.dev4fun.secretfriendapi.mapstruct.EventMapper
import org.springframework.stereotype.Service

@Service
class EventServiceImpl (
        private val eventRepository: EventRepository,
        private val eventMapper: EventMapper) : EventService {


    override fun save(eventRequest: EventRequest): Event {

        return eventRepository.save(
                eventMapper.toModel(eventRequest)
        )
    }
}

interface EventService {

    fun save(eventRequest: EventRequest) : Event
}
