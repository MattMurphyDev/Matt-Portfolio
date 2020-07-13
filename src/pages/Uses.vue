<template>
  <Layout>
    <main class="w-full flex-grow p-4">
      <h1 class="text-2xl font-black text-blue-900">Things I Use</h1>
      <p class="text-sm">Various things I use to get work done on a daily basis. For those who, like me, enjoy reading about workstation setups.</p>
      <section class="text-sm mt-2 md:mt-4">
        <h2 class="text-lg font-bold text-blue-900">Software</h2>
        <ul class="grid grid-cols-2">
          <li>VSCode</li>
          <li>ZSH</li>
          <li>Notion</li>
          <li>Figma</li>
        </ul>
        <h2 class="text-lg font-bold text-blue-900 mt-2 md:mt-4">Computers</h2>
        <ul>
          <li>Dell XPS 13 9360 (Xubuntu 18.04)</li>
          <li>Desktop PC (Windows 10 & Pop!_OS)
            <ul class="text-sm ml-4">
              <li><b>Case:</b> NZXT S340 Mid Tower</li>
              <li><b>Motherboard:</b> Gigabyte GA-AB350-Gaming 3</li>
              <li><b>CPU:</b> AMD Ryzen 5 1500x</li>
              <li><b>RAM:</b> EVGA 16GB (2 x 8GB) 2400 GHz</li>
              <li><b>Graphics:</b> AMD Radeon HD 7870</li>
              <li><b>PSU:</b> Corsair CX750M</li>
            </ul>
          </li>
        </ul>
        <h2 class="text-lg font-bold text-blue-900 mt-2 md:mt-4">Peripherals</h2>
        <ul>
          <li><b>Keyboard:</b> Vortex Gear Race 3</li>
          <li><b>Mouse:</b> Razer Naga 2012 Edition</li>
          <li><b>Headphones:</b> Audio Technica ATH-M50xBT</li>
        </ul>
      </section>
    </main>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Things I use"
  }
};
</script>

<style scoped>
li {
  margin-top: 0.25rem;
}
</style>