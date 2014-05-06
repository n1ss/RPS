var rps = {
        trinkets: document.getElementsByTagName('button'),
        playerChoice: function(val) {
            this.player = parseInt(val);
        },

        aiChoice: function() {
            this.ai = Math.floor(Math.random() * 3) + 1;
        },

        resultProcessing: function() {
            this.aiChoice();
            if (this.ai == this.player) {
                rps.gameStatus = 'dr'
            } else {
                var result = this.ai - this.player
                if (result == 1 || result == -2) {
                    rps.gameStatus = 'ai'
                } else {
                    rps.gameStatus = 'pl'
                };      
            };
            this.trinketsToStr(this.ai);
            this.aiChoiceString = this.trinket;
            this.trinketsToStr(this.player);
            this.playerChoiceString = this.trinket;
        },

        trinketsToStr: function(result) {
            switch (result) {
                case 1:
                    this.trinket = 'Rock';
                    break;
                case 2:
                    this.trinket = 'Paper';
                    break;
                case 3:
                    this.trinket = 'Scissors';
                    break;
            }
        },

        printResult: function() {
            var resultContainer = document.getElementById('result');
            var logContainer = document.getElementById('log');
            switch(rps.gameStatus) {
                case 'dr': 
                    var resultString = 'No one wins... ' + rps.playerChoiceString + ' vs ' + rps.aiChoiceString;
                    break;
                case 'ai':
                    var resultString = 'You lose ' + rps.playerChoiceString + ' vs ' + rps.aiChoiceString;
                    break;
                case 'pl':
                    var resultString = 'You win! ' + rps.playerChoiceString + ' vs ' + rps.aiChoiceString;
                    break;
            };
            resultContainer.innerHTML = resultString;
            logContainer.innerHTML += '<p>' + resultString + '</p>';
        },

        events: function() {
            for (var i =0 ; i < 3; i++){
                rps.trinkets[i].addEventListener('click', function(event){
                    var player = event.currentTarget.dataset['type'];
                    rps.playerChoice(player);
                    rps.resultProcessing();
                    rps.printResult();
                }, false);
            };
        }
    };

    function init() {    
        rps.events();
    }
   
    window.onload = init;