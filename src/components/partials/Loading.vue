<template>
  <div class="loading-screen">
      <div class="loading-section">
        <span>Loading...</span>
        <div class="lds-circle">
            <div></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Loading'
}
</script>

<style lang="scss" scoped>
    @keyframes lds-circle {
        0%, 100% {
            animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
        }
        0% {
            transform: rotateY(0deg);
        }
        50% {
            transform: rotateY(1800deg);
            animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
        }
        100% {
            transform: rotateY(3600deg);
        }
    }

    .loading-screen{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: white;
        z-index: 999;
        .loading-section{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            height: fit-content;
            width: fit-content;
            display: grid;
            grid-template-rows: 30px 75px;
            span{
                color: #1B1B1B;
                text-align: center;
                font-size: 20px;
                font-weight: 500;
            }
            .lds-circle{
                display: inline-block;
                transform: translateZ(1px);
                > div{
                    display: inline-block;
                    width: 64px;
                    height: 64px;
                    margin: 8px;
                    border-radius: 50%;
                    background: rgba(153, 184, 205, 0.4);
                    animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
                }
            }
        }
    }
</style>