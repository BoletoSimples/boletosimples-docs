---
title: Mostrando o Boleto no seu Site
position: 0
layout: pt
en: "/en/embed"
---

## Incorporar o boleto no seu site

Você pode incorporar o boleto na sua página logo após a geração pela API.

Para isso basta usar o formato `.js` na URL do Boleto

### Exemplos de Código

Boleto no layout padrão:

<pre class="html">
  &lt;script src=&quot;https://bole.to/2/zp.js&quot;&gt;&lt;/script&gt;
</pre>

Carnê:

<pre class="html">
  &lt;script src=&quot;https://bole.to/2/zp/carne.js&quot;&gt;&lt;/script&gt;
</pre>

Parcela 2 do carnê:

<pre class="html">
  &lt;script src=&quot;https://bole.to/2/zp/carne/2.js&quot;&gt;&lt;/script&gt;
</pre>

Boleto fatura:

<pre class="html">
  &lt;script src=&quot;https://bole.to/2/zp/letter.js&quot;&gt;&lt;/script&gt;
</pre>

### Parâmetros

Os seguintes parâmetros podem ser usados:

<table class='table table-bordered'>
  <thead>
    <tr>
      <th>Parâmetro</th>
      <th>Tipo</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>width</strong>
      </td>
      <td>
        Integer
      </td>
      <td>
        Largura em pixels do iframe que exibirá o boleto. O boleto terá largura máxima de 687px, o carnê largura máxima de 934px, mas você pode definir um tamanho menor que eles se redimensionam.
      </td>
    </tr>
    <tr>
      <td>
        <strong>height</strong>
      </td>
      <td>
        Integer
      </td>
      <td>
        Altura inicial em pixels do iframe que exibirá o boleto. A altura será ajustada após a página ser carregada.
      </td>
    </tr>
    <tr>
      <td>
        <strong>className</strong>
        <br/>
      </td>
      <td>
        String
      </td>
      <td>
        Nome da classe a ser incluida no iframe para caso você queira aplicar regras no CSS.
      </td>
    </tr>
  </tbody>
</table>

Exemplo de uso com os parâmetros:

<pre class="html">
  &lt;script src=&quot;https://bole.to/2/zp.js?width=600&amp;height=700&amp;className=boleto_iframe&quot;&gt;&lt;/script&gt;
</pre>