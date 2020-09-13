<template>
  <div>
    <h2>开心 数字变</h2>

    <img class="img" :src="imgSrc" alt="" />

    <Button type="primary" @click="cutNumber">减法</Button>
    <i-circle :percent="percent" :stroke-color="color">
      <Icon
        v-if="percent == 100"
        type="ios-checkmark"
        size="40"
        style="color:#5cb85c"
      ></Icon>
      <span v-else style="font-size:20px">{{ percent }}%</span>
    </i-circle>
    <Button type="primary" @click="addNumber">加法</Button>

    <Card style="width: 90%;margin: 50px auto;">
      <List>
        <ListItem>
          <span class="title"
            >{{ $store.getters["test/num"] }}
            {{ $store.state["test/name"] }}</span
          >
        </ListItem>
        <ListItem>
          <ListItemMeta
            avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
            title="This is title"
            description="This is description, this is description."
          />
        </ListItem>
        <ListItem>
          <ListItemMeta
            avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
            title="This is title"
            description="This is description, this is description."
          />
        </ListItem>
        <ListItem>
          <ListItemMeta
            avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
            title="This is title"
            description="This is description, this is description."
          />
          <template slot="action">
            <li>
              <a href="">Edit</a>
            </li>
            <li>
              <a href="">More</a>
            </li>
          </template>
        </ListItem>
        <ListItem>
          <ListItemMeta
            avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
            title="This is title"
            description="This is description, this is description."
          />
          <template slot="action">
            <li>
              <a href="">Edit</a>
            </li>
            <li>
              <a href="">More</a>
            </li>
          </template>
        </ListItem>
      </List>
    </Card>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import face from "../assets/images/face.png";
import logo from "../assets/images/logo.jpg";
import logo2 from "../assets/images/logo2.jpg";

export default {
  name: "hello-world",
  data() {
    return {
      imgSrc: face,
      percent: 0
    };
  },
  computed: {
    // ...mapGetters([
    //   'name',
    //   'num'
    // ]),

    color() {
      let color = "#fc5144";
      if (this.percent === 100) {
        color = "#5cb85c";
      }
      return color;
    }
  },
  methods: {
    // ...mapActions(['add_number', 'cut_number']),
    ...mapMutations(['ADD_NUMBER', 'CUT_NUMBER']),

    cutNumber() {
      this.imgSrc = logo;
      this.percent -= 10;
      this.$store.dispatch('test/add_number');
    },
    addNumber() {
      this.imgSrc = logo2;
      this.percent += 10;
      this.$store.dispatch('test/cut_number');
    }
  }
};
</script>
<style lang="less" scoped>
.title {
  color: #01aef2;
  font-size: 20px;
  font-weight: bold;
}
.img {
  display: block;
  height: 100px;
  margin: 20px auto;
  border-radius: 5px;
}
</style>
