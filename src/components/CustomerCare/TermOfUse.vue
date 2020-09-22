<template>
 <div class="termcontrol">
    <div class="item">
 <h2>Term of Use</h2>
 <p class="return">Depending on your banking institution, your refund will be credited back to your original payment method(s) in 3 to 5 business days.</p>
    </div>
    <div class="item">
 <h2>Return Policy</h2>
 <p class="return">Our return policy is simple and worry-free:
    If you're not 100% unconditionally satisfied with your pet supplies, you can return them within 365 days of purchase.
    If you would like to request a return or replacement, please send us a message with your order number
 </p>
    </div>
<div class="item">
 <h2>Pricing</h2>
 <p class="return">We do not accept returns or exchanges on prescription medications. However, if the medication you received is incorrect or damaged, we will gladly exchange it for you or provide a refund on a case-by-case basis.</p>
    </div>
</div>
</template>

<script>
export default {

}
</script>
<style scoped>
.termcontrol {
    display: flex;
    flex-wrap: wrap;
}
.item {
    height: 200px;
    width: 33% ;
    padding: auto
}
 h2 {
  display: block;
  margin-bottom: 10px
}
.return {
    width: 60%;
    margin: auto;
}
 @media (max-width: 850px ) {
 .item {
     width: 100%;
 }
 }
</style>
