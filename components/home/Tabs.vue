<script setup lang="ts">
const tabs = [
    { name: "Description" },
    { name: "Features" },
    { name: "Specification" },
];
</script>

<template>
    <div
        class="bg-gradient-to-b from-transparent to-[#0D0428] py-9 px-3 lg:px-10 2xl:px-1"
    >
        <ComponentTabs :tabs="tabs">
            <template v-slot:Description>
                <p class="mb-4">
                    Norem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Praesent auctor purus luctus
                    enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                    ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
                    vel bibendum lorem. Morbi convallis convallis diam sit amet
                    lacinia. Aliquam in elementum tellus.
                </p>
                <p>
                    Curabitur tempor quis eros tempus lacinia. Nam bibendum
                    pellentesque quam a convallis. Sed ut vulputate nisi.
                    Integer in felis sed leo vestibulum venenatis. Suspendisse
                    quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum.
                    Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris
                    a, blandit ultrices nibh. Mauris sit amet magna non ligula
                    vestibulum eleifend. Nulla varius volutpat turpis sed
                    lacinia. Nam eget mi in purus lobortis eleifend. Sed nec
                    ante dictum sem condimentum ullamcorper quis venenatis nisi.
                    Proin vitae facilisis nisi, ac posuere leo.
                </p>
            </template>
            <template v-slot:Features>
                <p class="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam, voluptas amet. Numquam vitae rerum fugit omnis
                    reprehenderit sed libero rem. Sit corrupti eveniet excepturi
                    ratione iure suscipit, voluptatibus earum veniam id est
                    culpa, qui unde natus molestias dolor illum facilis sed in
                    magnam delectus voluptate quam cumque? Ducimus facilis
                    explicabo ea odit fugiat iste reiciendis accusantium
                    repellat distinctio ipsum. Tempora!
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                    voluptas magni facere fugit officiis quas aspernatur
                    excepturi est ut debitis nam voluptatem velit inventore
                    nulla saepe laborum molestiae, ipsa nesciunt. Veniam tenetur
                    atque eos quisquam omnis qui, necessitatibus, enim
                    accusantium non autem veritatis minima ratione? Perspiciatis
                    maxime odio delectus eum, fugiat porro nobis provident
                    architecto distinctio quod reiciendis placeat atque veniam,
                    nam quo nisi natus eligendi. Deserunt quos nemo aliquid.
                </p>
            </template>
            <template v-slot:Specification>
                <p class="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa doloribus vitae rerum fuga sed dignissimos, itaque quos
                    quis dolor voluptates ad corporis aliquid aliquam deserunt
                    dolorem quae, pariatur deleniti et nemo reprehenderit
                    voluptatem excepturi nobis perferendis. Dolor eligendi
                    deleniti, quisquam consectetur soluta repellendus eum quasi,
                    magni nemo aliquid animi facere illum dolores cumque
                    laboriosam quae deserunt amet blanditiis non omnis odit?
                    Suscipit, officiis id! Doloremque, corrupti ab?
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    At, consectetur. Suscipit doloremque ea delectus eum iure
                    aut voluptatibus quam earum dolorum. Unde consequatur at
                    ipsam, enim quasi alias reiciendis? Nam.
                </p>
            </template>
        </ComponentTabs>
    </div>
</template>
