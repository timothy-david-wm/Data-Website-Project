/**
 * Created by session2 on 10/8/15.
 */
google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Male Learning Styles', ''],
        ['Visual/verbal (Reading)',     21.7],
        ['Visual/Nonverbal (images)',      48.7],
        ['Auditory',  31.1],
        ['Tactile/Kinesthetic', 17.3],
        ['Balanced',    22.5]
    ]);

    var options = {
        title: 'Learning Styles of Males'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['How we learn', '', { role: 'style' }],
        ['Exsplaining to others', 95, 'color: Gold'],
        ['Exspiriancing personally', 80, 'color: Silver'],
        ['Disscus with others', 70, 'color: Brown'],
        ['See and hear', 50, 'color: Red'],
        ['see', 30, 'color: Orange'],
        ['hear', 20, 'color: Green'],
        ['read', 10, 'color: Blue']
    ]);

    var options = {
        title: 'How to remember',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Percentage we remember',
            minValue: 0
        },
        vAxis: {
            title: 'City'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}