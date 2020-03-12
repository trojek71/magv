<template>
  <div class="container">
    <ul v-if="people && people.length > 0">
      <li
        v-for="person in people"
        :key="person.id"
      >
        {{person.name}}{{person.email}}
      </li>
    </ul>
    <h4 v-else>No people, please add one using playground</h4>
    <input v-model="person.name" placeholder="Person"/>
    <input v-model="person.email" placeholder="Email"/>
    <button @click="handleCreatePerson">Create Person</button>
  
  <mdb-tbl>
    <mdb-tbl-head>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </mdb-tbl-head>
    <mdb-tbl-body>
      <tr v-for="person in people" :key="person.id">
      <td>{{person.id}}</td>
      <td>{{person.name}}</td>
      <td>{{person.email}}</td>
      </tr>
    </mdb-tbl-body>
  </mdb-tbl>
  
</div>
</template>

<script>
import { PEOPLE } from '@/gql/queries/person.queries'
import { PERSON_CREATED } from '@/gql/subscriptions/person.subscriptions'
import { createPerson } from '@/gql/mutations/person.mutations'
import { mdbTbl, mdbTblHead, mdbTblBody,mdbBtn } from 'mdbvue';
export default {
  apollo: {
    people: {
      query: PEOPLE,
      subscribeToMore: {
        document: PERSON_CREATED,
        updateQuery: (previousResult, { subscriptionData }) => {
          return {
            people: [
              ...previousResult.people,
              subscriptionData.data.personCreated
            ]
          }
        },
      }
    }
  },
  components: {
      mdbTbl,
      mdbTblHead,
      mdbTblBody,
      mdbBtn
    },

  methods: {
    handleCreatePerson() {
      this.$apollo.mutate({
        mutation: createPerson,
        variables: {
          name: this.person.name,
          email: this.person.email
        }
      })
    }
  },

  data: () => ({
    person: {
      name: '',
      email:''
    }
  })
}
</script>

<style scoped>
  .container {
    width: 100%;
    min-height: 100vh;
    align-items: center;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
  }
</style>