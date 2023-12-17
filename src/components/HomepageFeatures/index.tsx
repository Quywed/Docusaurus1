import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Muda de Óleo Barata ',
    Svg: require('@site/static/img/car_oil.svg').default,
    description: (
      <>
        Fazemos a mudança de óleo na compra de serviços superior acima de 10€. Garantidadmente que não é só água...
      </>
    ),
  },
  {
    title: 'Troca de Pipes GRÁTIS',
    Svg: require('@site/static/img/screw-10.svg').default,
    description: (
      <>
        Se aparecer na oficina pelas 3 da manhã, fazemos a troca de todos os seus pipes, sem garantia de que o carro sair inteiro da oficina.
      </>
    ),
  },
  {
    title: 'Reparo de Bicicletas',
    Svg: require('@site/static/img/bike-14.svg').default,
    description: (
      <>
        Oferecemos servico de arranjo a bicicletas de criancas menores de 30 anos.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
