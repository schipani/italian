function app() {
    return {
        language: null,
        selection: null,
        auxiliary: true,
        essential: true,
        frequent: true,
        daily: true,
        reflexive: true,
        presente: true,
        imperfetto: true,
        passato: true,
        futuro: true,

        presente_io: null,
        presente_tu: null,
        presente_lei: null,
        presente_noi: null,
        presente_voi: null,
        presente_loro: null,

        init() {
            this.$watch('essential', (value) => {
                this.load();
            });

            this.$watch('frequent', (value) => {
                this.load();
            });

            this.$watch('daily', (value) => {
                this.load();
            });

            this.$watch('reflexive', (value) => {
                this.load();
            });

            this.$refs.presente_io.addEventListener('change', () => { this.presente_io = this.$refs.presente_io.value.toLowerCase() == this.selection.conjugation.presente.io; });
            this.$refs.presente_tu.addEventListener('change', () => { this.presente_tu = this.$refs.presente_tu.value.toLowerCase() == this.selection.conjugation.presente.tu; });
            this.$refs.presente_lei.addEventListener('change', () => { this.presente_lei = this.$refs.presente_lei.value.toLowerCase() == this.selection.conjugation.presente.lei; });
            this.$refs.presente_noi.addEventListener('change', () => { this.presente_noi = this.$refs.presente_noi.value.toLowerCase() == this.selection.conjugation.presente.noi; });
            this.$refs.presente_voi.addEventListener('change', () => { this.presente_voi = this.$refs.presente_voi.value.toLowerCase() == this.selection.conjugation.presente.voi; });
            this.$refs.presente_loro.addEventListener('change', () => { this.presente_loro = this.$refs.presente_loro.value.toLowerCase() == this.selection.conjugation.presente.loro; });
        
            this.$refs.imperfetto_io.addEventListener('change', () => { this.imperfetto_io = this.$refs.imperfetto_io.value.toLowerCase() == this.selection.conjugation.imperfetto.io; });
            this.$refs.imperfetto_tu.addEventListener('change', () => { this.imperfetto_tu = this.$refs.imperfetto_tu.value.toLowerCase() == this.selection.conjugation.imperfetto.tu; });
            this.$refs.imperfetto_lei.addEventListener('change', () => { this.imperfetto_lei = this.$refs.imperfetto_lei.value.toLowerCase() == this.selection.conjugation.imperfetto.lei; });
            this.$refs.imperfetto_noi.addEventListener('change', () => { this.imperfetto_noi = this.$refs.imperfetto_noi.value.toLowerCase() == this.selection.conjugation.imperfetto.noi; });
            this.$refs.imperfetto_voi.addEventListener('change', () => { this.imperfetto_voi = this.$refs.imperfetto_voi.value.toLowerCase() == this.selection.conjugation.imperfetto.voi; });
            this.$refs.imperfetto_loro.addEventListener('change', () => { this.imperfetto_loro = this.$refs.imperfetto_loro.value.toLowerCase() == this.selection.conjugation.imperfetto.loro; });

            this.$refs.passato_io.addEventListener('change', () => { this.passato_io = this.$refs.passato_io.value.toLowerCase() == this.selection.conjugation.passato.io; });
            this.$refs.passato_tu.addEventListener('change', () => { this.passato_tu = this.$refs.passato_tu.value.toLowerCase() == this.selection.conjugation.passato.tu; });
            this.$refs.passato_lei.addEventListener('change', () => { this.passato_lei = this.$refs.passato_lei.value.toLowerCase() == this.selection.conjugation.passato.lei; });
            this.$refs.passato_noi.addEventListener('change', () => { this.passato_noi = this.$refs.passato_noi.value.toLowerCase() == this.selection.conjugation.passato.noi; });
            this.$refs.passato_voi.addEventListener('change', () => { this.passato_voi = this.$refs.passato_voi.value.toLowerCase() == this.selection.conjugation.passato.voi; });
            this.$refs.passato_loro.addEventListener('change', () => { this.passato_loro = this.$refs.passato_loro.value.toLowerCase() == this.selection.conjugation.passato.loro; });

            this.$refs.futuro_io.addEventListener('change', () => { this.futuro_io = this.$refs.futuro_io.value.toLowerCase() == this.selection.conjugation.futuro.io; });
            this.$refs.futuro_tu.addEventListener('change', () => { this.futuro_tu = this.$refs.futuro_tu.value.toLowerCase() == this.selection.conjugation.futuro.tu; });
            this.$refs.futuro_lei.addEventListener('change', () => { this.futuro_lei = this.$refs.futuro_lei.value.toLowerCase() == this.selection.conjugation.futuro.lei; });
            this.$refs.futuro_noi.addEventListener('change', () => { this.futuro_noi = this.$refs.futuro_noi.value.toLowerCase() == this.selection.conjugation.futuro.noi; });
            this.$refs.futuro_voi.addEventListener('change', () => { this.futuro_voi = this.$refs.futuro_voi.value.toLowerCase() == this.selection.conjugation.futuro.voi; });
            this.$refs.futuro_loro.addEventListener('change', () => { this.futuro_loro = this.$refs.futuro_loro.value.toLowerCase() == this.selection.conjugation.futuro.loro; });
        },

        setup() {
            this.load();
        },

        random() {
            const selection = this.language[Math.floor(Math.random() * this.language.length)];
            this.selection = selection;

            this.$refs.verb.textContent = this.selection.verb;
            
            this.clear();
        },

        load(randomize = true) {
            
            this.language = [];
            this.language.push(...language[0].verbs);
            for (var i = 1; i < language.length; i++) {
                const selection = language[i];
                if (this.essential && selection.category == "essential") this.language.push(...selection.verbs);
                if (this.frequent && selection.category == "frequent") this.language.push(...selection.verbs);
                if (this.daily && selection.category == "daily") this.language.push(...selection.verbs);
                if (this.reflexive && selection.category == "reflexive") this.language.push(...selection.verbs);
            }
            
            if (randomize) this.random();
        },

        check() {
            this.presente_io = this.$refs.presente_io.value.toLowerCase() == this.selection.conjugation.presente.io;
            this.presente_tu = this.$refs.presente_tu.value.toLowerCase() == this.selection.conjugation.presente.tu;
            this.presente_lei = this.$refs.presente_lei.value.toLowerCase() == this.selection.conjugation.presente.lei;
            this.presente_noi = this.$refs.presente_noi.value.toLowerCase() == this.selection.conjugation.presente.noi;
            this.presente_voi = this.$refs.presente_voi.value.toLowerCase() == this.selection.conjugation.presente.voi;
            this.presente_loro = this.$refs.presente_loro.value.toLowerCase() == this.selection.conjugation.presente.loro;

            this.imperfetto_io = this.$refs.imperfetto_io.value.toLowerCase() == this.selection.conjugation.imperfetto.io;
            this.imperfetto_tu = this.$refs.imperfetto_tu.value.toLowerCase() == this.selection.conjugation.imperfetto.tu;
            this.imperfetto_lei = this.$refs.imperfetto_lei.value.toLowerCase() == this.selection.conjugation.imperfetto.lei;
            this.imperfetto_noi = this.$refs.imperfetto_noi.value.toLowerCase() == this.selection.conjugation.imperfetto.noi;
            this.imperfetto_voi = this.$refs.imperfetto_voi.value.toLowerCase() == this.selection.conjugation.imperfetto.voi;
            this.imperfetto_loro = this.$refs.imperfetto_loro.value.toLowerCase() == this.selection.conjugation.imperfetto.loro;

            this.passato_io = this.$refs.passato_io.value.toLowerCase() == this.selection.conjugation.passato.io;
            this.passato_tu = this.$refs.passato_tu.value.toLowerCase() == this.selection.conjugation.passato.tu;
            this.passato_lei = this.$refs.passato_lei.value.toLowerCase() == this.selection.conjugation.passato.lei;
            this.passato_noi = this.$refs.passato_noi.value.toLowerCase() == this.selection.conjugation.passato.noi;
            this.passato_voi = this.$refs.passato_voi.value.toLowerCase() == this.selection.conjugation.passato.voi;
            this.passato_loro = this.$refs.passato_loro.value.toLowerCase() == this.selection.conjugation.passato.loro;

            this.futuro_io = this.$refs.futuro_io.value.toLowerCase() == this.selection.conjugation.futuro.io;
            this.futuro_tu = this.$refs.futuro_tu.value.toLowerCase() == this.selection.conjugation.futuro.tu;
            this.futuro_lei = this.$refs.futuro_lei.value.toLowerCase() == this.selection.conjugation.futuro.lei;
            this.futuro_noi = this.$refs.futuro_noi.value.toLowerCase() == this.selection.conjugation.futuro.noi;
            this.futuro_voi = this.$refs.futuro_voi.value.toLowerCase() == this.selection.conjugation.futuro.voi;
            this.futuro_loro = this.$refs.futuro_loro.value.toLowerCase() == this.selection.conjugation.futuro.loro;
        },

        reveal() {
            this.$refs.presente_io.value = this.selection.conjugation.presente.io;
            this.$refs.presente_tu.value = this.selection.conjugation.presente.tu;
            this.$refs.presente_lei.value = this.selection.conjugation.presente.lei;
            this.$refs.presente_noi.value = this.selection.conjugation.presente.noi;
            this.$refs.presente_voi.value = this.selection.conjugation.presente.voi;
            this.$refs.presente_loro.value = this.selection.conjugation.presente.loro;

            this.$refs.imperfetto_io.value = this.selection.conjugation.imperfetto.io;
            this.$refs.imperfetto_tu.value = this.selection.conjugation.imperfetto.tu;
            this.$refs.imperfetto_lei.value = this.selection.conjugation.imperfetto.lei;
            this.$refs.imperfetto_noi.value = this.selection.conjugation.imperfetto.noi;
            this.$refs.imperfetto_voi.value = this.selection.conjugation.imperfetto.voi;
            this.$refs.imperfetto_loro.value = this.selection.conjugation.imperfetto.loro;

            this.$refs.passato_io.value = this.selection.conjugation.passato.io;
            this.$refs.passato_tu.value = this.selection.conjugation.passato.tu;
            this.$refs.passato_lei.value = this.selection.conjugation.passato.lei;
            this.$refs.passato_noi.value = this.selection.conjugation.passato.noi;
            this.$refs.passato_voi.value = this.selection.conjugation.passato.voi;
            this.$refs.passato_loro.value = this.selection.conjugation.passato.loro;

            this.$refs.futuro_io.value = this.selection.conjugation.futuro.io;
            this.$refs.futuro_tu.value = this.selection.conjugation.futuro.tu;
            this.$refs.futuro_lei.value = this.selection.conjugation.futuro.lei;
            this.$refs.futuro_noi.value = this.selection.conjugation.futuro.noi;
            this.$refs.futuro_voi.value = this.selection.conjugation.futuro.voi;
            this.$refs.futuro_loro.value = this.selection.conjugation.futuro.loro;
        },

        clear() {
            this.$refs.presente_io.value = "";
            this.$refs.presente_tu.value = "";
            this.$refs.presente_lei.value = "";
            this.$refs.presente_noi.value = "";
            this.$refs.presente_voi.value = "";
            this.$refs.presente_loro.value = "";

            this.$refs.imperfetto_io.value = "";
            this.$refs.imperfetto_tu.value = "";
            this.$refs.imperfetto_lei.value = "";
            this.$refs.imperfetto_noi.value = "";
            this.$refs.imperfetto_voi.value = "";
            this.$refs.imperfetto_loro.value = "";

            this.$refs.passato_io.value = "";
            this.$refs.passato_tu.value = "";
            this.$refs.passato_lei.value = "";
            this.$refs.passato_noi.value = "";
            this.$refs.passato_voi.value = "";
            this.$refs.passato_loro.value = "";

            this.$refs.futuro_io.value = "";
            this.$refs.futuro_tu.value = "";
            this.$refs.futuro_lei.value = "";
            this.$refs.futuro_noi.value = "";
            this.$refs.futuro_voi.value = "";
            this.$refs.futuro_loro.value = "";

            this.presente_io = null;
            this.presente_tu = null;
            this.presente_lei = null;
            this.presente_noi = null;
            this.presente_voi = null;
            this.presente_loro = null;

            this.imperfetto_io = null;
            this.imperfetto_tu = null;
            this.imperfetto_lei = null;
            this.imperfetto_noi = null;
            this.imperfetto_voi = null;
            this.imperfetto_loro = null;

            this.passato_io = null;
            this.passato_tu = null;
            this.passato_lei = null;
            this.passato_noi = null;
            this.passato_voi = null;
            this.passato_loro = null;

            this.futuro_io = null;
            this.futuro_tu = null;
            this.futuro_lei = null;
            this.futuro_noi = null;
            this.futuro_voi = null;
            this.futuro_loro = null;

            this.$refs.presente_io.focus();
        }
    }
}