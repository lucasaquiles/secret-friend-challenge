package com.dev4fun.secretfriendapi.mapstruct

import com.dev4fun.secretfriendapi.controller.EventRequest
import com.dev4fun.secretfriendapi.domain.Event
import org.mapstruct.InheritInverseConfiguration
import org.mapstruct.Mapper
import org.mapstruct.Mapping
import java.util.*


@Mapper
interface EventMapper {

    @Mapping(source = "eventDate", target = "eventDate", qualifiedByName = arrayOf("formatDate"))
    fun toRequest(event: Event): EventRequest


    fun formatDate(stringDate : Date) : Date{

        return Date()
    }

    @InheritInverseConfiguration
    fun toModel(eventRequest: EventRequest): Event
}