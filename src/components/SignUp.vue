<template>
  <div class="sign-up-page">
    <h3 class="sign-up-page__title">Sign Up</h3>
    <form @submit.prevent class="sign-up-page__form">
      <div
        :class="{ active: isActive === 'name' }"
        class="sign-up-page__form-item"
      >
        <label>User name</label>
        <input
          v-model.lazy="userInfo.name"
          type="text"
          @focus="setActiveItem('name')"
        />
      </div>

      <div
        class="sign-up-page__form-item"
        :class="{ active: isActive === 'surname' }"
      >
        <label>Surname</label>
        <input
          v-model.lazy="userInfo.surname"
          type="text"
          @focus="setActiveItem('surname')"
        />
      </div>

      <div
        class="sign-up-page__form-item"
        :class="{ active: isActive === 'email' }"
      >
        <label>Email</label>
        <input
          v-model.trim="userInfo.email"
          type="email"
          @focus="setActiveItem('email')"
        />
      </div>

      <div
        class="sign-up-page__form-item"
        :class="{ active: isActive === 'phone' }"
      >
        <label>Phone</label>
        <input
          v-model.number="userInfo.phone"
          type="number"
          @focus="setActiveItem('phone')"
        />
      </div>

      <div
        class="sign-up-page__form-item"
        :class="{ active: isActive === 'birthYear' }"
      >
        <label>Birth Year</label>
        <input
          v-model.number="userInfo.birthYear"
          type="number"
          @focus="setActiveItem('birthYear')"
        />
      </div>

      <div
        class="sign-up-page__form-item"
        :class="{ active: isActive === 'gender' }"
      >
        <input
          v-model="userInfo.gender"
          id="female"
          type="radio"
          name="radio"
          value="female"
        />
        <label for="female">Female</label>

        <input
          v-model="userInfo.gender"
          id="male"
          type="radio"
          name="radio"
          value="male"
        />
        <label for="male">Male</label>
      </div>

      <div
        class="sign-up-page__form-item"
        :class="{ active: isActive === 'login' }"
      >
        <label>Login</label>
        <input
          v-model.trim="userInfo.login"
          type="text"
          @focus="setActiveItem('login')"
        />
      </div>

      <div
        class="sign-up-page__form-item"
        :class="{ active: isActive === 'password' }"
      >
        <label>Password</label>
        <input
          v-model.trim="userInfo.password"
          type="text"
          @focus="setActiveItem('password')"
        />
      </div>

      <div
        class="sign-up-page__form-item"
        :class="{ active: isActive === 'repeatedPassword'}"
      >
        <label>Repeated Password</label>
        <input
          v-model.trim="userInfo.repeatedPassword"
          type="text"
          @focus="setActiveItem('repeatedPassword')"
        />
      </div>

      <div
        class="sign-up-page__form-item"
        :class="{ active: isActive === 'commercialExperience' }"
      >
        <input
          v-model="userInfo.commercialExperience"
          type="checkbox"
          id="commercialExperience"
          true-value="Yes, I have"
          false-value="No, I haven`t"
        />
        <label for="commercialExperience">How many years do you have?</label>
      </div>

      <div
        class="sign-up-page__form-item"
        :class="{ active: isActive === 'yearsOfExperience' }"
        v-show="userInfo.commercialExperience === 'Yes, I have'"
      >
        <label>Years Of Experience</label>
        <input
          v-model.number="userInfo.yearsOfExperience"
          type="number"
          @focus="setActiveItem('yearsOfExperience')"
        />
      </div>

      <div
        class="sign-up-page__form-item"
        :class="{ active: isActive === 'country' }"
      >
        <label>Country</label>
        <input
          v-model.lazy="userInfo.country"
          type="text"
          @focus="setActiveItem('country')"
        />
      </div>

      <div
        class="sign-up-page__form-item"
        :class="{ active: isActive === 'city' }"
      >
        <label class="d-block">City</label>
        <input
          v-if="userInfo.country !== 'Ukraine'"
          v-model.lazy="userInfo.city"
          type="text"
          @focus="setActiveItem('city')"
        />

        <select v-else v-model="userInfo.city">
          <option value="" disabled>City</option>
          <option v-for="(city, index) in ukrainianCities" :key="index">
            {{ city }}
          </option>
        </select>
      </div>

      <div
        class="sign-up-page__form-item"
        :class="{ active: isActive === 'address'}"
      >
        <label>Address</label>
        <input
          v-model="userInfo.address"
          type="text"
          @focus="setActiveItem('address')"
        />
      </div>

      <div
        class="sign-up-page__form-item"
        :class="{ active: isActive === 'englishLevel' }"
      >
        <label class="d-block"> English level </label>
        <select v-model="userInfo.englishLevel">
          <option value="" disabled>English level</option>
          <option
            :value="level.value"
            v-for="(level, index) in englishLevelsValues"
            :key="index + level.value"
          >
            {{ level.label }}
          </option>
        </select>
      </div>

      <div 
        class="result" 
        v-for="(item, index) in userInfo" 
        :key="index">
          {{ index  }}: <span>{{ item }}</span>
      </div>

    </form>

  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      userInfo: {
        name: "",
        surname: "",
        email: "",
        phone: null,
        birthYear: null,
        gender: null,
        login: "",
        password: "",
        repeatedPassword: "",
        commercialExperience: null,
        yearsOfExperience: null,
        country: "",
        city: "",
        address: "",
        englishLevel: "",
      },
      ukrainianCities: [
        "Vinnytsia",
        "Kropyvnytskyi",
        "Poltava",
        "Kharkiv",
        "Dnipro",
        "Luhansk",
        "Kherson",
        "Donetsk",
        "Lutsk",
        "Simferopol",
        "Khmelnitsky",
        "Zhitomir",
        "Lvov",
        "Sumy",
        "Cherkasy",
        "Zaporozhye",
        "Nikolaev",
        "Ternopil",
        "Chernigov",
        "Ivano-Frankivsk",
        "Odessa",
        "Uzhgorod",
        "Chernivtsi",
        "Kiev",
      ],
      englishLevelsValues: [
        {
          value: "A1",
          label: "Beginner",
        },
        {
          value: "A2",
          label: "Elementary",
        },
        {
          value: "B1",
          label: "Intermediate",
        },
        {
          value: "B2",
          label: "Upper Intermediate",
        },
        {
          value: "C1",
          label: "Advanced",
        },
        {
          value: "C2",
          label: "Proficiency",
        },
      ],
      isActive: '',
    };
  },
  methods: {
    setActiveItem(activeInput) {
      this.isActive = activeInput;
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-up-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 20px 0;
  &__title {
    margin: 20px 0;
    font-weight: 700;
  }
  &__form {
    max-width: 300px;
  }
  label {
    padding-bottom: 6px;
    display: inline-block;
    padding-left: 7px;
  }
  label,
  p {
    font-size: 16px;
    margin-right: 12px;
  }
  input {
    margin-bottom: 12px;
    border: 1px solid transparent;
  }
  input[type="text"],
  input[type="number"],
  input[type="email"],
  select {
    font-size: 18px;
    padding: 4px 10px;
    width: 100%;
    border-radius: 15px;
  }
  input[type="radio"] {
    margin-right: 4px;
    cursor: pointer;
  }
  .sign-up-page__form-item {
    &.active input {
      border: 1px solid rgb(139, 0, 0);
    }
  }
  .d-block {
    display: block;
  }
  .result {
    font-size: 16px;
    margin-top: 5px;
    span {
      padding-left: 8px;
      color: rgb(139, 0, 0);
    }
  }
}
</style>