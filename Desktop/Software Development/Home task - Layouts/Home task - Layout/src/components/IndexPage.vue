<template>
  <section>
    <div class="main-layout">
      <div class="logo">{{ 'LOGO' }}</div>
      <header />

      <img src="../assets/images/top.png" class="top-img" alt="" />
      <section class="main-text-content">
        <h3>
          {{
            `All your files in one secure location,
          accessible anywhere.`
          }}
        </h3>
        <p class="secondary-text-content">
          {{
            `Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.`
          }}
        </p>
      </section>
      <section class="info-items-container">
        <p class="info-item info-item1">
          {{
            `The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.`
          }}
        </p>
        <p class="info-item info-item2">
          {{
            `2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.`
          }}
        </p>
        <p class="info-item info-item3">
          {{
            `Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.`
          }}
        </p>
        <p class="info-item info-item4">
          {{
            `Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.`
          }}
        </p>
      </section>
      <section class="svg-info-container">
        <img src="../assets/images/bottom.png" alt="" />
        <div class="info-main-text-container">
          <h3 class="info-main-text-header">
            {{
              `Stay productive, 
wherever you are`
            }}
          </h3>
          <p class="info-main-text">
            {{
              `Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.`
            }}
          </p>
          <p class="info-main-text">
            {{
              `Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.`
            }}
          </p>
        </div>
        <section class="testimonials">
          <article class="testimonial testimonial-1">
            <p class="testimonial-text">
              {{
                `Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.`
              }}
            </p>
          </article>
          <article class="testimonial testimonial-2">
            <p class="testimonial-text">
              {{
                `Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.`
              }}
            </p>
          </article>
          <article class="testimonial testimonial-3">
            <p class="testimonial-text">
              {{
                `Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.`
              }}
            </p>
          </article>
        </section>
      </section>
      <section class="banner">
        <h2>Get early access today</h2>

        <p class="banner-text">
          {{
            `It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.`
          }}
        </p>
        <input type="text" class="banner-input" />
        <button class="banner-cta">{{ 'Get started for free' }}</button>
      </section>
    </div>
  </section>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  name: '',
  components: {
    Header,
  },
};
</script>
