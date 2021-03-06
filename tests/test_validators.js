
const assert = require('assert');
const validators = require('../utils/validators');


describe('Test for validators', function(){
    describe('Test for validator of email', function(){
        it('Valid emails', function(){
            assert.equal(validators.email('stacey81@yahoo.com'), true);
            assert.equal(validators.email('ncrawford@hotmail.com'), true);
            assert.equal(validators.email('tammy85@yahoo.com'), true);
            assert.equal(validators.email('reynoldsheidi@kent.net'), true);
            assert.equal(validators.email('mharris@gmail.com'), true);
            assert.equal(validators.email('bowmankimberly@smith.info'), true);
            assert.equal(validators.email('mark40@gmail.com'), true);
            assert.equal(validators.email('sleach@jordan.org'), true);
            assert.equal(validators.email('anne09@yahoo.com'), true);
            assert.equal(validators.email('victorjones@rogers-dickson.com'), true);
            assert.equal(validators.email('baileyelizabeth@yahoo.com'), true);
        });
        it('Invalid emails', function(){
            assert.equal(validators.email('@бирюкова.com'), false);
            assert.equal(validators.email('stacey81@.com'), false);
            assert.equal(validators.email('stacey81@gmail..com'), false);
            assert.equal(validators.email('ncrawford@hotmail.'), false);
            assert.equal(validators.email('tammy85@yahoo'), false);
            assert.equal(validators.email('юрий90hotmail.com'), false);
            assert.equal(validators.email('reynoldsheidi@'), false);
            assert.equal(validators.email('gmail.com'), false);
            assert.equal(validators.email(''), false);
            assert.equal(validators.email('bowmankimberly.info'), false);
            assert.equal(validators.email('bowmank@imbe--rly.info'), false);
            assert.equal(validators.email('эмилия73@@устинов.biz'), false);
            assert.equal(validators.email('ростислав55@yahoo.com'), false);
            assert.equal(validators.email('морозоваанжелика@yahoo.ru.com'), false);
            assert.equal(validators.email('mark40@gmail,com'), false);
            assert.equal(validators.email('sleach$jordan.org'), false);
            assert.equal(validators.email('sleach@@jordan.org'), false);
            assert.equal(validators.email('stelat@-jsads.org'), false);
            assert.equal(validators.email('qsaa@sdasds-.org'), false);
            assert.equal(validators.email('sleach@-------.org'), false);
            assert.equal(validators.email('1 сорокинлев@yahoo.com'), false);
            assert.equal(validators.email('сорокинлев@ya hoo.com'), false);
            assert.equal(validators.email('an ne09@yahoo.com'), false);
            assert.equal(validators.email('victorjones-rogers-dickson.com'), false);
        });
    });
    describe('Test for validator of domain', function(){
        it('Valid domains', function(){
            assert.equal(validators.domain('www.johnson.com'), true);
            assert.equal(validators.domain('baker-wade.org'), true);
            assert.equal(validators.domain('www.smith-huber.com'), true);
            assert.equal(validators.domain('www.mayo.org'), true);
            assert.equal(validators.domain('www.brennan-ellison.org'), true);
            assert.equal(validators.domain('brown.biz'), true);
            assert.equal(validators.domain('ingram-robinson.biz'), true);
            assert.equal(validators.domain('brown-delgado.ne'), true);
            assert.equal(validators.domain('www.cruz.org'), true);
            assert.equal(validators.domain('gibson-moore.org'), true);
            assert.equal(validators.domain('www.ayala-scott.biz'), true);
            assert.equal(validators.domain('www.pham-wilson.ne'), true);
            assert.equal(validators.domain('www.preston.ne'), true);
            assert.equal(validators.domain('www.harris.com'), true);
            assert.equal(validators.domain('www.nguyen.com'), true);
            assert.equal(validators.domain('www.craig.info'), true);
            assert.equal(validators.domain('www.smith.info'), true);
            assert.equal(validators.domain('clark.org'), true);
            assert.equal(validators.domain('www.davis.biz'), true);
            assert.equal(validators.domain('www.brown-castaneda.com'), true);
            assert.equal(validators.domain('www.jenkins.com'), true);
            assert.equal(validators.domain('johnson.info'), true);
            assert.equal(validators.domain('otter.biz'), true);
            assert.equal(validators.domain('errera.info'), true);
            assert.equal(validators.domain('atel.ne'), true);
            assert.equal(validators.domain('www.bolton-hoover.info'), true);
            assert.equal(validators.domain('www.richardson-rodriguez.ne'), true);
            assert.equal(validators.domain('www.price-butler.org'), true);
            assert.equal(validators.domain('all.com'), true);
            assert.equal(validators.domain('olsen-medina.com'), true);
            assert.equal(validators.domain('www.w.com'), true);
            assert.equal(validators.domain('www.ww.com'), true);
            assert.equal(validators.domain('www.www.com'), true);
            assert.equal(validators.domain('www.wwww.com'), true);
            assert.equal(validators.domain('w.com'), true);
            assert.equal(validators.domain('ww.com'), true);
            assert.equal(validators.domain('w-w.com'), true);
            assert.equal(validators.domain('ww-ww.com'), true);
            assert.equal(validators.domain('wwww.com'), true);
            assert.equal(validators.domain('wwwww.com'), true);
        });
        it('Invalid domains', function(){
            assert.equal(validators.domain('www.com'), false);
            assert.equal(validators.domain('www.adasdad.com.'), false);
            assert.equal(validators.domain('baker-wade.'), false);
            assert.equal(validators.domain('dera--wave.com'), false);
            assert.equal(validators.domain('www.-----.com'), false);
            assert.equal(validators.domain('www.smith-huber'), false);
            assert.equal(validators.domain('smithhuber.'), false);
            assert.equal(validators.domain('rasdas.ru.'), false);
            assert.equal(validators.domain('www.'), false);
            assert.equal(validators.domain('www.brennan-ellison'), false);
            assert.equal(validators.domain('.biz'), false);
            assert.equal(validators.domain('www..org'), false);
            assert.equal(validators.domain('clark'), false);
            assert.equal(validators.domain('www.имя.biz'), false);
            assert.equal(validators.domain('www.за-русь.com'), false);
            assert.equal(validators.domain('рус-воин.com'), false);
            assert.equal(validators.domain('рус.com'), false);
            assert.equal(validators.domain(''), false);
            assert.equal(validators.domain('www.w'), false);
            assert.equal(validators.domain('www.ww'), false);
        });
    });
    describe('Test for validator of url', function(){
        it('Valid urls', function(){
            assert.equal(validators.url('http://dummyimage.com/230x744'), true);
            assert.equal(validators.url('http://www.lawrence.biz/list/wp-content/main/search/'), true);
            assert.equal(validators.url('http://www.lorempixel.com/902/931'), true);
            assert.equal(validators.url('http://herrera.com/tags/tags/blog/index.htm'), true);
            assert.equal(validators.url('https://placeholdit.imgix.net/~text?txtsize=55&txt=636×756&w=636&h=756'), true);
            assert.equal(validators.url('https://www.placeholdit.imgix.net/~text?txtsize=55&txt=636×756&w=636&h=756'), true);
            assert.equal(validators.url('http://tyler-chaney.org/index/'), true);
            assert.equal(validators.url('http://dummyimage.com/63x165'), true);
            assert.equal(validators.url('http://www.jackson-shelton.com/'), true);
            assert.equal(validators.url('http://dummyimage.com/855x989'), true);
            assert.equal(validators.url('http://www.hardy-gonzales.com/about/'), true);
            assert.equal(validators.url('https://placeholdit.imgix.net/~text?txtsize=55&txt=780×108&w=780&h=108'), true);
            assert.equal(validators.url('http://www.martinez-chavez.biz/wp-content/tags/main/main.htm'), true);
            assert.equal(validators.url('http://www.lorempixel.com/264/736'), true);
            assert.equal(validators.url('http://allen.biz/privacy/'), true);
            assert.equal(validators.url('https://placeholdit.imgix.net/~text?txtsize=55&txt=244×443&w=244&h=443'), true);
            assert.equal(validators.url('http://www.freeman.com/'), true);
            assert.equal(validators.url('https://placeholdit.imgix.net/~text?txtsize=55&txt=336×83&w=336&h=83'), true);
            assert.equal(validators.url('http://clark.org/'), true);
            assert.equal(validators.url('http://www.lorempixel.com/506/868'), true);
            assert.equal(validators.url('http://ortiz.net/category/search/tag/author.html'), true);
            assert.equal(validators.url('https://placeholdit.imgix.net/~text?txtsize=55&txt=61×595&w=61&h=595'), true);
            assert.equal(validators.url('http://www.payne.com/search/blog/post.htm'), true);
            assert.equal(validators.url('http://dummyimage.com/872x635'), true);
            assert.equal(validators.url('http://barajas.com/'), true);
            assert.equal(validators.url('https://placeholdit.imgix.net/~text?txtsize=55&txt=38×969&w=38&h=969'), true);
            assert.equal(validators.url('http://www.maxwell.net/post/'), true);
            assert.equal(validators.url('http://dummyimage.com/245x69'), true);
            assert.equal(validators.url('http://www.trevino.biz/index/'), true);
            assert.equal(validators.url('http://dummyimage.com/166x866'), true);
            assert.equal(validators.url('http://clark-rhodes.com/wp-content/tags/app/main.htm'), true);
            assert.equal(validators.url('https://placeholdit.imgix.net/~text?txtsize=55&txt=939×344&w=939&h=344'), true);
            assert.equal(validators.url('http://www.diaz.org/list/list/main/privacy/'), true);
            assert.equal(validators.url('http://dummyimage.com/461x624'), true);
            assert.equal(validators.url('http://trevino-evans.com/index/'), true);
            assert.equal(validators.url('http://dummyimage.com/922x1015'), true);
            assert.equal(validators.url('http://www.scott.com/main/'), true);
            assert.equal(validators.url('http://dummyimage.com/563x858'), true);
            assert.equal(validators.url('http://padilla.com/'), true);
            assert.equal(validators.url('http://www.lorempixel.com/822/601'), true);
            assert.equal(validators.url('http://moreno-davidson.org/terms.jsp'), true);
            assert.equal(validators.url('http://www.lorempixel.com/20/231'), true);
            assert.equal(validators.url('http://www.vargas.com/explore/tags/posts/faq.php'), true);
            assert.equal(validators.url('https://placeholdit.imgix.net/~text?txtsize=55&txt=835×973&w=835&h=973'), true);
            assert.equal(validators.url('http://harrison.org/homepage/'), true);
            assert.equal(validators.url('https://placeholdit.imgix.net/~text?txtsize=55&txt=216×103&w=216&h=103'), true);
            assert.equal(validators.url('http://edwards.com/'), true);
            assert.equal(validators.url('http://dummyimage.com/884x38'), true);
            assert.equal(validators.url('http://www.harris.org/post/'), true);
            assert.equal(validators.url('https://placeholdit.imgix.net/~text?txtsize=55&txt=626×979&w=626&h=979'), true);
            assert.equal(validators.url('http://www.clark.net/wp-content/tags/posts/privacy.asp'), true);
            assert.equal(validators.url('http://dummyimage.com/365x145'), true);
            assert.equal(validators.url('http://www.hobbs.net/'), true);
            assert.equal(validators.url('http://www.hobbs.net'), true);
            assert.equal(validators.url('http://www.lorempixel.com/839/353'), true);
            assert.equal(validators.url('http://rodriguez-vasquez.com/'), true);
            assert.equal(validators.url('http://dummyimage.com/296x585'), true);
            assert.equal(validators.url('http://cox-robertson.biz/list/terms.php'), true);
            assert.equal(validators.url('http://dummyimage.com/739x162'), true);
            assert.equal(validators.url('http://collins-nichols.info/wp-content/app/about/'), true);
            assert.equal(validators.url('http://www.lorempixel.com/426/828'), true);
            assert.equal(validators.url('http://www.sullivan.net/category/search/home.asp'), true);
            assert.equal(validators.url('http://w.com/'), true);
            assert.equal(validators.url('http://wwww.com/'), true);
            assert.equal(validators.url('http://ww-ww.com/'), true);
            assert.equal(validators.url('http://ww.com/506/868'), true);
        });
        it('Invalid urls', function(){
            assert.equal(validators.url('http://.com/230x744'), false);
            assert.equal(validators.url('http:/www.lawrence.biz/list/wp-content/main/search/'), false);
            assert.equal(validators.url('http//www.lorempixel.com/902/931'), false);
            assert.equal(validators.url('ftp://herrera.com/tags/tags/blog/index.htm'), false);
            assert.equal(validators.url('httpp://placeholdit.imgix.net/~text?txtsize=55&txt=636×756&w=636&h=756'), false);
            assert.equal(validators.url('hhttp://tyler-chaney.org/index/'), false);
            assert.equal(validators.url('htttp://dummyimage.com/63x165'), false);
            assert.equal(validators.url('httpss://www.jackson-shelton.com/'), false);
            assert.equal(validators.url('imap://dummyimage.com/855x989'), false);
            assert.equal(validators.url('smtp://www.hardy-gonzales.com/about/'), false);
            assert.equal(validators.url('sftp://placeholdit.imgix.net/~text?txtsize=55&txt=780×108&w=780&h=108'), false);
            assert.equal(validators.url('http://www.martinez--chavez.biz/wp-content/tags/main/main.htm'), false);
            assert.equal(validators.url('http://www..com/264/736'), false);
            assert.equal(validators.url('http://.biz/privacy/'), false);
            assert.equal(validators.url('https://placeholdit/~text?txtsize=55&txt=244×443&w=244&h=443'), false);
            assert.equal(validators.url('http://www.freeman.com//'), false);
            assert.equal(validators.url('http://wwww.freeman.com//'), false);
            assert.equal(validators.url('https://wwww.placeholdit.imgix.net/~text?txtsize=55&txt=336×83&w=336&h=83'), false);
            assert.equal(validators.url('http://clark.org./'), false);
            assert.equal(validators.url('http://www.com/506/869'), false);
            assert.equal(validators.url('http://www/category/search/tag/author.html'), false);
        });
    });
});
