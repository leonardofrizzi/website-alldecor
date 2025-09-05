import React from 'react';
import Link from 'next/link'; 

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">{children}</h2>
);

const Paragraph = ({ children }) => (
  <p className="text-gray-600 mb-4 leading-relaxed">{children}</p>
);

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">
          Política de Privacidade
        </h1>

        <Paragraph>
          A sua privacidade é importante para nós. É política da All Vidro Esquadrias respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site All Vidro Esquadrias, e outros sites que possuímos e operamos.
        </Paragraph>

        <SectionTitle>1. Coleta de Dados</SectionTitle>
        <Paragraph>
          Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
        </Paragraph>
        <Paragraph>
          Coletamos diferentes tipos de informações para várias finalidades para poder prestar e melhorar o nosso serviço. Os dados coletados podem incluir, mas não se limitam a: nome, endereço de e-mail, número de telefone e dados de uso através de cookies.
        </Paragraph>

        <SectionTitle>2. Uso de Cookies</SectionTitle>
        <Paragraph>
          Utilizamos cookies para melhorar a sua experiência de navegação em nosso site. Cookies são pequenos arquivos de dados que são armazenados no seu dispositivo. Eles nos ajudam a entender como você usa nosso site, permitindo-nos personalizar o conteúdo e melhorar a funcionalidade. Você pode instruir o seu navegador para recusar todos os cookies ou para indicar quando um cookie está sendo enviado. No entanto, se você não aceitar cookies, pode não conseguir usar algumas partes do nosso Serviço.
        </Paragraph>

        <SectionTitle>3. Uso dos Seus Dados</SectionTitle>
        <Paragraph>
          Usamos os dados coletados para diversas finalidades:
        </Paragraph>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
          <li>Para fornecer e manter nosso Serviço;</li>
          <li>Para notificá-lo sobre alterações no nosso Serviço;</li>
          <li>Para permitir que você participe de recursos interativos do nosso Serviço quando você optar por fazê-lo;</li>
          <li>Para fornecer atendimento e suporte ao cliente;</li>
          <li>Para fornecer análises ou informações valiosas para que possamos melhorar o Serviço;</li>
          <li>Para monitorar o uso do Serviço;</li>
          <li>Para detectar, prevenir e resolver problemas técnicos.</li>
        </ul>

        <SectionTitle>4. Segurança dos Dados</SectionTitle>
        <Paragraph>
          A segurança dos seus dados é importante para nós, mas lembre-se que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para usar meios comercialmente aceitáveis para proteger seus Dados Pessoais, não podemos garantir sua segurança absoluta.
        </Paragraph>

        <SectionTitle>5. Seus Direitos de Proteção de Dados</SectionTitle>
        <Paragraph>
          Você tem o direito de acessar, atualizar ou excluir as informações que temos sobre você. Sempre que possível, você pode acessar, atualizar ou solicitar a exclusão dos seus Dados Pessoais diretamente na seção de configurações da sua conta. Se você não conseguir realizar essas ações sozinho, entre em contato conosco para ajudá-lo.
        </Paragraph>

        <SectionTitle>6. Links para Outros Sites</SectionTitle>
        <Paragraph>
          O nosso site pode conter links para outros sites que não são operados por nós. Se você clicar em um link de terceiros, você será direcionado para o site desse terceiro. Aconselhamos vivamente que reveja a Política de Privacidade de todos os sites que visitar. Não temos controle e não assumimos qualquer responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros.
        </Paragraph>

        <SectionTitle>7. Contato</SectionTitle>
        <Paragraph>
          Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco através da nossa <Link href="/contato" className="text-[#070b52] font-bold hover:underline">página de contato</Link>.
        </Paragraph>
      </div>
    </div>
  );
}
