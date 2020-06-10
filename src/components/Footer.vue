<template>
  <footer class="pt-10 pb-10 bg-graydark">
    <div class="container mx-auto pr-5 pl-5 lg:pr-16 lg:pl-16">
      <FooterItem title="Designed for you by Moovingo">
        <Logo />
      </FooterItem>
      <FooterItem
        title="Legal"
        content="Moovingo is licensed by the<br/>
      Property Services Regulatory<br/>
      Authority no. 003783"
      />
      <FooterItem
        title="Address"
        content="<a href='https://goo.gl/maps/LFvWMoxh3pa5AA3B6'>1st floor, Sandyford Hall,<br/>
        Sandyford, Dublin 18</a>"
      />
      <FooterItem
        title="Phone"
        content="<a href='tel:0035315169999'>01 516 9999</a>"
      />
      <FooterItem title="Links">
        <ul class="links list-none pl-0">
          <li>
            <router-link to="/soon">T&Cs</router-link>
          </li>
          <li>
            <router-link to="/soon">Privacy</router-link>
          </li>
          <li>
            <router-link to="/soon">Cookies</router-link>
          </li>
          <li>
            <router-link to="/soon">Media Inquiries</router-link>
          </li>
        </ul>
      </FooterItem>
      <FooterItem title="Connect with Us">
        <ul class="social-network list-none pl-0">
          <li class="mt-0 mr-2 mb-0 ml-2">
            <router-link to="/soon" class="fa fa-facebook fa-lg"></router-link>
          </li>
          <li class="mt-0 mr-2 mb-0 ml-2">
            <router-link to="/soon" class="fa fa-twitter fa-lg"></router-link>
          </li>
          <li class="mt-0 mr-2 mb-0 ml-2">
            <router-link to="/soon" class="fa fa-instagram fa-lg"></router-link>
          </li>
          <li class="mt-0 mr-2 mb-0 ml-2">
            <router-link to="/soon" class="fa fa-envelope fa-lg"></router-link>
          </li>
        </ul>
      </FooterItem>
      <FooterItem content="© 2020 Moovingo" />
    </div>
  </footer>
</template>

<script>
import FooterItem from "@/components/FooterItem.vue";
import Logo from "@/components/Logo.vue";
export default {
  name: "Footer",
  components: {
    FooterItem,
    Logo
  }
};
</script>
