package com.dev4fun.secretfriendapi.domain

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.OneToOne

@Entity
data class Participant(

        @Id @GeneratedValue val id: Long,
        val name: String,
        val email: String,
        val phone: String,
        val confirmed: Boolean,

        @OneToOne
        val secretFriend: Participant
)
