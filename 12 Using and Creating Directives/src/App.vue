<template>
    <div>
        <h1>Build-in Directives</h1>
        <p v-text="'v-text'"></p>
        <p v-html="'<strong>v-html</strong>'"></p>
        
        <hr>

        <h1>Custom Directives</h1>
        <!-- <p v-highlight>Color text</p> -->
        <p v-highlight="'red'">Color text</p>

        <p v-highlight:background="'red'">Color text</p>

        <p v-highlight:background.delayed="'red'">Color text</p>

        <hr>

        <h1>Local Directives</h1>

        <!-- <p v-local-highlight:background.delayed.blink="'red'">Color text</p> -->

        <p v-local-highlight:background.delayed.blink="{mainColor:'red', secondColor: 'blue', delayed: 500}">Color text</p>
    </div>
    
</template>

<script>
export default {
    directives: {
        'local-highlight': {
            bind(el, binding, vnode) {
                let delay = 0;

                if(binding.modifiers['blink']) {
                    // let mainColor = binding.value;
                    // let secondColor = 'green';

                    let mainColor = binding.value.mainColor;
                    let secondColor = binding.value.secondColor;
                    
                    let currentColor = mainColor;
                    
                    setTimeout(() => {
                        setInterval(()=> {
                            currentColor == mainColor ?  currentColor = secondColor: currentColor = mainColor;

                            if(binding.arg == 'background') {
                                el.style.backgroundColor = currentColor;
                            } else {
                                el.style.color = currentColor;
                            }
                        // }, 1000);
                         }, binding.value.delayed);

                    }, delay);

                }

                if(binding.modifiers['delayed']) {
                delay = 3000;

                setTimeout(() => {
                    if(binding.arg == 'background') {
                    el.style.backgroundColor = binding.value;
                    } else {
                    el.style.color = binding.value;
                    }
                }, delay);
                }
            }
        }
    }
}
</script>
