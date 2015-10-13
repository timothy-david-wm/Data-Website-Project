/**
 * Created by session2 on 10/9/15.
 */
google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Femle Learning Styles', ''],
        ['Visual/verbal (Reading)',     38.2],
        ['Visual/Nonverbal (images)',      38.2],
        ['Auditory',  31.1],
        ['Tactile/Kinesthetic', 17.3],
            ['Balanced',    22.5]
    ]);

    var options = {
        title: 'Learning Styles of Females'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

    chart.draw(data, options);
}

google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);
