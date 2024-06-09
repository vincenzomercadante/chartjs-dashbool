# CHARTJS DashBool

## Description
# Dashboard

## Anteprima

!https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3632faac-a987-4be5-be4d-56e82ae9067b/Screenshot.png

## Descrizione Progetto

<aside>
📚 Il progetto si prefigge l'obiettivo di imparare ad usare la libreria ChartJs e di scoprire come utilizzarla con vuejs.
Lo scopo è quindi creare dei grafici usando come dati quelli richiamati da un server remoto.

</aside>

<aside>
💡 **Per poter affrontare questo esercizio sarà necessario saper utilizzare:**
Vite
Vue
Js
Scss
Axios
[ChartJs](http://chartjs.org/) per creare i grafici, nella sua versione per vue: [vue-chartjs](https://vue-chartjs.org/), un wrapper della libreria. 
[jsonserver](https://github.com/typicode/json-server) per caricare i dati in remoto e simulare la risposta di un server.

</aside>

### Milestone 1

Dedicarsi completamente e unicamente al layout. Lasciando il MAIN completamente vuoto.

### Milestone 2

Ci viene fornito dal reparto backend un json (***data.json*** che trovi negli allegati) che rappresenta la risposta che otterremo una volta che il sistema sarà completamente online. 

Il nostro obiettivo è ora creare un mockup del server da cui prelevare i dati usando una chiamata axios. Allo scopo possiamo usare una libreria open-source come json-server su cui caricare i dati.

Creare i primi 3 grafici contenenti una visione annuale de:

1. Numero di connessioni mensili (Line chart)
2. Sistema Operativo degli utenti che si sono commessi (Doughnut chart)
3. Range di Età degli utenti (Bar chart)

### Milestone 3 - Fake it till you make it -

Il cliente ha in previsione di alimentare i pc del proprio ufficio e gran parte dell'impianto di illuminazione con un impianto fotovoltaico. Per questo motivo nella dashboard vuole visualizzare i dati di produzione giornaliera, per tenerne il rendimento costantemente sotto controllo. L'impianto, ancora non funzionante, genera un log dei dati ogni ora. L'utente vuole vederli aggiornarsi in tempo reale sul grafico, senza bisogno di aggiornare la pagina. Per adesso perciò procediamo creando un mockup di questi dati.

1. Ci viene fornito un array con la percentuale del rendimento di un impianto standard. L'array è costituito da 24 numeri da 0 a 100 corrispondenti al rendimento dell'impianto nelle varie ore della giornata. Il Grafico simile a una Gaussiana (grafico a campana) è quello tipico dell'irraggiamento solare.
A. Crea una funzione (attivabile al click sul tasto play che vedi nello screenshot sopra il grafico SOLAR POWER) che invii al grafico un valore, preso dall'array dei rendimenti, ogni secondo (corrispondete quindi a ogni ora del giorno).
B. **BONUS:** ad ogni valore del punto A aggiungi una variazione completamente random di **±5%** (del valore massimo dell'impianto). Per intenderci il 10 (preso dall'array) può diventare massimo 15 o minimo 5. Così da non avere sempre grafici uguali.
C. **BONUS:** i valori cui è stata aggiunta la percentuale di cui al punto B. Non possono eccedere il **range 0-100**. Quindi non possono esserci valori negativi ne superiori a 100.
D. Aggiorna il grafico. Per questo leggi bene la documentazione di vue-chartjs e soprattutto come aggiornare o aggiungere dati agli Oggetti o Array dinamici di Vue.

### Milestone 4

Aggiungi infine 2 grafici (***connections.json***) sulla distribuzione dell'età degli utenti (divisa in fasce) e dei sistemi operativi sui quali essi operano. Tali dati non sono stati aggregati e ti vengono forniti sotto forma di Array di Oggetti contenenti i dati di collegamento del singolo utente.
**BONUS:** I vari sistemi operativi (OS) potrebbero cambiare nel tempo. Sarebbe bene non usare un array statico, ma ricrearlo ad ogni collegamento in base agli OS elencati nell'array caricato sul server.

