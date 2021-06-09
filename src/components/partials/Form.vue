<template>
    <form @submit.prevent="sendMessage" v-if="!isBot">
        <div>
            <label for="name">Name</label>
            <input v-model="name" required name="name" id="name" placeholder="Name" type="text"/>
        </div>

        <div>
            <label for="email">Email</label>
            <input v-model="email" required name="email" id="email" placeholder="Email" type="email"/>
        </div>

        <div class="hidden">
            <label>Don’t fill this out if you're human: </label>
            <input v-model="website" name="website" placeholder="This field is only for the robots." />
        </div>
        
        <div>
            <label for="message">Message</label>
            <textarea v-model="message" required name="message" id="message" placeholder="Message" />
        </div>

        <div>
            <button type="submit">
                {{ loading ? "Sending Message..." : "Submit" }}
            </button>
        </div>

        <div v-if="success" class="form-message">
            <p class="success-message">Thank you for contacting me! Your message has been sent successfully.</p>
        </div>
        
        <div v-if="error" class="form-message">
            <p class="error-message">Something went wrong. Did you fill out all of the required fields?</p>
        </div>
    </form>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
    name: 'Form',
    data() {
        return {
            name: '',
            email: '',
            message: '',
            loading: false,
            success: false,
            error: false,
            isBot: false,
            website: null
        }
    },
    methods: {
        sendMessage(e) {
            this.loading = true
            this.error = false
            this.success = false

            if(this.website != null){
                this.isBot = true
            }else{
                try{
                    emailjs.sendForm('service_aemy5ra', 'template_s2xiarn', e.target, 'user_IlM0LaVXuq4nFjQCEa0ZJ', {
                        name: this.name,
                        email: this.email,
                        message: this.message
                    })
                    
                    this.name = ''
                    this.email = ''
                    this.message = ''
                    this.success = true
                }catch(error){
                    console.log(error)
                    this.error = true
                }
                this.loading = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    form{
        div{
            padding-bottom: 20px;
            label{
                display: none;
            }
            input, textarea{
                width: 100%;
                box-sizing: border-box;
                padding: 10px 15px;
                border: none;
                background-color: #F4F4F4;
                border-radius: 4px;
                font-family: 'Tajawal', sans-serif;
                color: #1B1B1B;
                font-size: 15px;
                outline: none;
            }
            input{
                height: 40px;
            }
            textarea{
                height: 200px;
            }
            button{
                height: 50px;
                width: 150px;
                background: #1B1B1B;
                outline: none;
                border-radius: 4px;
                color: #FFFFFF;
                font-family: 'Tajawal', sans-serif;
                font-size: 15px;
                cursor: pointer;
                border: 1px solid #1B1B1B;
                transition: 0.5s all;
                margin-left: auto;
                display: block;
                &:hover{
                    background: transparent;
                    color: #1B1B1B;
                }
            }
        }
        .hidden{
            display: none;
        }
    }

    @media only screen and (min-width: 992px){
        form{
            div{
                padding-bottom: 30px;
                input, textarea{
                    font-size: 20px;
                }
                input{
                    height: 50px;
                }
                textarea{
                    height: 250px;
                }
                button{
                    height: 60px;
                    width: 180px;
                    font-size: 20px;
                }
            }
        }
    }
</style>