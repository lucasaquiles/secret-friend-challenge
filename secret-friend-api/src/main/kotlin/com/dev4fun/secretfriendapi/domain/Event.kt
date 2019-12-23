package com.dev4fun.secretfriendapi.domain

import java.util.*
import javax.persistence.*

@Entity
data class Event(

        @Id @GeneratedValue val id: Long,
        val theme: String,
        val description: String,
        val eventDate: Date,

        @Embedded val owner: EventOwner,

        @OneToMany
        val participants: MutableSet<Participant>
)