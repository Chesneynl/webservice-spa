<template>
  <div id="app">
    <div id="nav">
      
    </div>
    <router-view/>
  </div>
</template>

<style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
    }

    textarea {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    input {
        display:block;
        width:100%;
        padding:8px 10px;
        margin-bottom:10px;
    }

    textarea {
        display:block;
        width:100%;
        padding:10px 10px;
        margin-bottom:10px;
    }

    button {
        color:#fff;
        -webkit-appearance: none;
        margin-bottom:10px;
        cursor:pointer;
        float:right;
        font-size:16px;
    }

    button.button-green {
        background:#38c172;
        border:1px solid #38c172;
        border-radius:5px;
        padding:10px 20px;
    }

    button.button-green:hover {
        background:#fff;
        color:#38c172;
    }
    
    button.button-red {
        background:#e3342f;
        padding:10px 20px;
        border:1px solid #e3342f;
        border-radius:5px;
        text-align:center;
        position:absolute;
        right: 10px;
        top: 11px;
        font-size: 12px;
        font-weight: bold;
    }

    button.button-red:hover {
        background:none;
        color:#e3342f;
    }
</style>
