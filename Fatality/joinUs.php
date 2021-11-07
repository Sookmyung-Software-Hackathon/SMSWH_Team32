<!-- <p>phonenum0: <span id="frm_num0"></span></p>
<p>phonenum1: <span id="frm_num1"></span></p>
<p>phonenum2: <span id="frm_num2"></span></p>
<p>phonenum3: <span id="frm_num3"></span></p>
<script>
function receive_get_data(param) {
    var result = null, tmp = [];
    var items = window.location.search.substring(1).split("&");
    for (var i = 0; i < items.length; i++) {
        tmp = items[i].split("=");
        if (tmp[0] === param) result = decodeURIComponent(tmp[1]);
    }
    return result;
}// -->




<!Doctype>
<html>
    <head>
        <title>haha</title>
    </head>
    <body>
        <?php 
        $start11='';
        $chulbal11='';
        $end11='';
        $tellme11='';
        $seatnum11='';
        $roomnum11='';
        ?>
        <p>  출발시간: <?php if (isset($start11)) echo $_GET["chulbal"]; ?> </p>
        <p> 출발역start: <?php if (isset($chulbal11)) echo $_GET["start"]; ?> </p>
        <p> 도착역end: <?php if (isset($end11)) echo $_GET["end"]; ?> </p>
        <p> 전화번호start: <?php if (isset($tellme11))  echo $_GET["tellme"]; ?> </p>
        <p> seatnum: <?php if (count($roomnum11)!=0)  $_GET["seatnum"]; ?> </p>
        <p> roomnum: <?php if (isset($roomnum11))  $_GET["roomnum"]; ?> </p>
  
    </body>
</html>