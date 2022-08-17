<template>
  <div class="article-main-text-container">
    <img src="@/assets/detail/test.png" alt="" />
    <p>
      携手创作，共同成长！这是我参与「掘金日新计划 · 8 月更文挑战」的第6天,<a
        href="https://juejin.cn/post/7123120819437322247"
        title="https://juejin.cn/post/7123120819437322247"
        target="_blank"
        >点击查看活动详情</a
      >
    </p>
    <ul>
      <li>抽象类</li>
      <li>接口</li>
      <li>抽象类与接口区别</li>
    </ul>
    <p class="title1">1.抽象类</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;抽象类用abstract来修饰,例如:</p>
    <!-- 代码区域1 -->
    <div class="pre-container">
      <div class="code-container">
        <highlightjs
          language="Java"
          :autodetect="false"
          :code="code1"
        ></highlightjs>
      </div>
    </div>
    <!-- 代码区域1结束 -->
    <p>
      抽象类是用来捕捉子类的通用性的,它不能被实例化,只能用作子类的超类,抽象类是被用来创建继承层级里子类的模板,例如JDK中的GenericServlet类中部分代码:
    </p>
    <!-- 代码区域2 -->
    <div class="pre-container">
      <div class="code-container">
        <highlightjs
          language="Java"
          :autodetect="false"
          :code="code2"
        ></highlightjs>
      </div>
    </div>
    <!-- 代码区域2结束 -->
    <p>
      当HttpServlet继承GenericServlet时,HttpServlet实现了GenericServlet类中的service方法
    </p>
    <!-- 代码区域3 -->
    <div class="pre-container">
      <div class="code-container">
        <highlightjs
          language="Java"
          :autodetect="false"
          :code="code3"
        ></highlightjs>
      </div>
    </div>
    <!-- 代码区域3结束 -->
    <p class="title1">2.接口</p>
    <p>
      接口是抽象方法的集合,如果一个类实现了某个接口,那么它就继承了这个接口的抽象方法,就像契约模式,如果实现了这个接口,那么就必须保证使用这些方法,并且实现这些方法,接口是一种形式,接口自身不能做任何事情,接口里面的方法默认都是abstract的,以Externalizable接口为例:
    </p>
    <!-- 代码区域4 -->
    <div class="pre-container">
      <div class="code-container">
        <highlightjs
          language="Java"
          :autodetect="false"
          :code="code4"
        ></highlightjs>
      </div>
    </div>
    <!-- 代码区域4结束 -->
    <p>当实现这个接口时,就要实现它里面的两个方法:</p>
    <!-- 代码区域5 -->
    <div class="pre-container">
      <div class="code-container">
        <highlightjs
          language="Less"
          :autodetect="false"
          :code="code5"
        ></highlightjs>
      </div>
    </div>
    <!-- 代码区域5结束 -->
    <p class="title1">3.抽象类和接口的比较</p>
    <!-- 表格 -->
    <table>
      <thead>
        <tr>
          <th><strong>参数</strong></th>
          <th><strong>抽象类</strong></th>
          <th><strong>接口</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>默认的方法实现</td>
          <td>可以有默认的方法实现</td>
          <td>完全抽象，根本不存在方法的实现</td>
        </tr>
        <tr>
          <td>实现方式</td>
          <td>
            子类用<strong>extends</strong>关键字来继承抽象类，如果子类不是抽象类的话，它需要实现父级抽象类中所有抽象方法，父类中非抽象方法可重写也可不重写
          </td>
          <td>
            子类用<strong>implements</strong>去实现接口，需要实现接口中所有方法
          </td>
        </tr>
        <tr>
          <td>构造器</td>
          <td>抽象类可以有构造器(构造器不能用abstract修饰)</td>
          <td>接口不能有构造器</td>
        </tr>
        <tr>
          <td>与正常Java类的区别</td>
          <td>正常Java类可被实例化,抽象类不能被实例化,其他区别见上下文</td>
          <td>接口和正常java类是不同的类型</td>
        </tr>
        <tr>
          <td>访问修饰符</td>
          <td>抽象方法可以用public、protected、default修饰</td>
          <td>接口默认是public、不能用别的修饰符去修饰</td>
        </tr>
        <tr>
          <td>main方法</td>
          <td>抽象类中可以有main方法,可以运行它</td>
          <td>接口中不能有main方法,因此不能运行它</td>
        </tr>
        <tr>
          <td>多继承</td>
          <td>抽象类可继承一个类和实现多个接口</td>
          <td>接口只能继承一个或者多个接口</td>
        </tr>
        <tr>
          <td>速度</td>
          <td>抽象类比接口速度快</td>
          <td>接口稍微慢点，因为它需要去寻找类中实现的它的方法</td>
        </tr>
        <tr>
          <td>添加新方法</td>
          <td>
            如果在抽象类中添加新非abstract的方法,可以直接添加,因为非abstract方法无需在子类中实现,如果是abstact方法,则需要改变子类的代码,也要实现这个方法
          </td>
          <td>
            只要在接口中添加方法，实现它的类就要改变，去实现这个新添加的方法
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 表格结束 -->
    <p class="title2">3.1 设计层面上的区别</p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.
      抽象类是对一种事务的抽象，是对整个类进行抽象，包括属性，行为（方法）。接口是对行为（行为）的抽象。如果一个类继承或实现了某个抽象类，那么一定是抽象类的种类（拥有同一种属性或行为的类）。
    </p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b.
      设计层面不同，抽象类作为很多子类的父类，是一种模板设计，而接口是一种规范，它是一种辐射式设计，也就是说对于抽象类，如果需要添加新的方法，可以直接在抽象方法中添加实现，子类可以不用变更，
    </p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;而对于接口不行，如果接口进行了变更，那么实现它的类都需要做变更。
    </p>
    <p class="title2">3.2 接口和抽象类分别在什么时候使用</p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.
      如果拥有一些方法，并想让他们中的一些有默认的具体实现，请选择抽象类
    </p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b.
      如果想实现多重继承,那么请使用接口,由于java不支持多继承,子类不能继承多个类,但一个类可以实现多个接口,因此可以使用接口来解决。
    </p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c.
      如果基本功能在不断变化，那么就使用抽象类，如果使用接口，那么每次变更都需要相应的去改变实现该接口的所有类。
    </p>
    <p class="title2">3.3 JDK8 中接口的默认方法和静态方法</p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JDK8中,Oracle引入默认方法和静态方法,用来减少抽象类和接口的差异,可以在接口中提供默认的实现方法并实现该接口的类不用强制去实现这个方法。JDK8中接口的静态方法只能通过接口名直接去调用,接口中的默认方法因为不是abstract的,所以可重写,也可以不重写。
    </p>
    <p class="ending"><strong>欢迎关注白羊🐏，感谢观看ヾ(◍°∇°◍)ﾉﾞ</strong></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code1: `
      package com.test.abstractaaa;
      public abstract class TestAbstract {        
      }
      `,
      code2: `
public abstract class GenericServlet  implements Servlet, ServletConfig, java.io.Serializable{
    public void init(ServletConfig config) throws ServletException {
       this.config = config;
       this.init();
    }
    public void init() throws ServletException {}
    public abstract void service(ServletRequest req, ServletResponse res) throws ServletException, IOException;
        public void destroy() {}
}
      `,
      code3: `
public abstract class HttpServlet extends GenericServlet
{
    poected void service(HttpServletRequest req, HttpServletResponse resp)
        throws ServletException, IOException
   {            //...
   }
}        `,
      code4: `
public interface Externalizable extends java.io.Serializable {
    
    void writeExternal(ObjectOutput out) throws IOException;

    void readExternal(ObjectInput in) throws IOException, ClassNotFoundException;
}
`,
      code5: `
public class ExteImpl implements Externalizable {

    @Override
    public void writeExternal(ObjectOutput out) throws IOException {
        // TODO Auto-generated method stub

    }

    @Override
    public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException {
        // TODO Auto-generated method stub

    }

}
`,
    };
  },
};
</script>

<style scoped lang="scss">
.article-main-text-container {
  word-break: break-word;
  font-size: 16px;
  img {
    width: 100%;
    height: 425px;
  }
  p {
    line-height: 30px;
    margin-top: 22px;
    margin-bottom: 22px;
    &.title1 {
      font-weight: bold !important;
    }
    &.title2 {
      font-weight: bold !important;
    }
    &.ending {
      font-weight: bold !important;
    }
    a {
      color: #0269c8;
      border-bottom: 1px solid #d1e9ff;
    }
  }
  ul {
    line-height: 1.75;
    padding: 0;
    margin: 0;
    padding-left: 28px;
    li {
      list-style: disc;
    }
  }
  .pre-container {
    font-family: Menlo, Monaco, Consolas, Courier New, monospace;
    position: relative;
    background: #f8f8f8;
    padding: 0;
    margin: 0;
    line-height: 20px;
  }
  .code-container {
    border-radius: 2px;
    font-size: 12px;
    padding: 15px 12px;
    margin: 0;
    word-break: normal;
    display: block;
  }
  table {
    word-break: break-word;
    line-height: 1.75;
    font-weight: 400;
    color: #333;
    display: inline-block !important;
    font-size: 12px;
    width: auto;
    max-width: 100%;
    overflow: auto;
    border: 1px solid #f6f6f6;
    thead {
      background: #f6f6f6;
      color: #000;
      text-align: left;
      th {
        padding: 12px 7px;
        line-height: 24px;
        font-weight: bold;
      }
    }
    tbody {
      vertical-align: middle;
      td {
        min-width: 120px;
        padding: 12px 7px;
        line-height: 24px;
      }
      tr:nth-child(2n) {
        background-color: #fcfcfc;
      }
    }
  }
}
</style>