

var leaderCompiler = Handlebars.compile($('#leader-template').text());

$.ajax({
    url: '/leaderboard'
}).done(function(leaderData){
    console.log('Data', leaderData);
    leaderBoardData = leaderData;
    leaderSearch.renderStock();
}).fail(function(jqxhr, status){
    console.log('leaderboard AJAX request has failed', status, jqxhr);
});

leaderSearch.renderStock = function(){
    console.log('SData', stockSearch);
    $('#leaderboard').empty().append(leaderCompiler(leaderBoardData));
};