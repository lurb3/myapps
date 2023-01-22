<template>
  <h1>Expenses my friend</h1>
  <div class="expenses-wrapper">
    <button class="add-expense" @click="showModal = true">
      Add new expense
    </button>
    <ModalView v-if="showModal"></ModalView>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="expense in expenses" :key="expense.id">
          <td>{{ expense.name }}</td>
          <td>{{ expense.amount }}</td>
          <td>
            <button class="edit-expense" @click="editExpense(expense.id)">
              Edit
            </button>
            <button class="delete-expense" @click="deleteExpense(expense.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import request from "@/services/axios.interceptors";
import ModalView from "@/components/expenses/ModalView.vue";

export default defineComponent({
  components: { ModalView },
  created() {
    const getData = async () => {
      const response = await request.get("/api/v1/expenses");
      this.expenses = response.data;
    };
    getData();
  },
  data() {
    return {
      showModal: false,
      expenses: [{ id: 0, name: "", amount: 0 }],
    };
  },
  methods: {
    addExpense() {
      console.log("ok");
    },
    editExpense(id: number) {
      console.log(id);
    },
    deleteExpense(id: number) {
      console.log(id);
    },
  },
});
</script>

<style scoped>
.expenses-wrapper {
  margin: auto;
  padding: 0px 10%;
}
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #dddddd;
}

.add-expense,
.edit-expense,
.delete-expense {
  outline: 0;
  border: 0;
  cursor: pointer;
  color: white;
  padding: 5px 5px;
  border-radius: 5px;
}
.add-expense {
  background-color: #391d62;
  float: right;
  margin-bottom: 8px;
}
.edit-expense {
  background-color: #391d62;
  margin-right: 10px;
  transition: background-color 0.5s;
}
.edit-expense:hover {
  background-color: #1b0d2e;
  transition: background-color 0.5s;
}
.delete-expense {
  background-color: #621d1d;
  margin-right: 10px;
  transition: background-color 0.5s;
}
.delete-expense:hover {
  background-color: #280b0b;
  margin-right: 10px;
  transition: background-color 0.5s;
}
</style>
