<!--start-->
```config
{
    "name": "测试",
     "github": {
        "repo": "zhangjikai/gitbook-use"
     }
}
```

线程池是并发中一项常用的优化方法，通过对线程复用，减少线程的创建，降低资源消耗，提高程序响应速度。在 Java 中我们一般通过 Exectuors 提供的工厂方法来创建线程池，但是线程池的最终实现类是 ThreadPoolExecutor，下面我们详细分析一下 ThreadPoolExecutor 的实现。

<!--more  -->

我们首先看下线程池的基本使用。在下面的代码中我们创建一个固定大小的线程池，该线程池中最多包含 5 个线程，当任务数量超过线程的数量时，就将任务添加到任务队列，等线程空闲之后再从任务队列中获取任务。

<!-- start-->

```config
{
    "name": "测试3"
}
```

队列同步器 AbstractQueuedSynchronizer（以下简称 AQS），是用来构建锁或者其他同步组件的基础框架。它使用一个 int 成员变量来表示同步状态，通过 CAS 操作对同步状态进行修改，确保状态的改变是安全的。通过内置的 FIFO （First In First Out）队列来完成资源获取线程的排队工作。更多关于 Java 多线程的文章可以转到 这里

<!-- more   -->

在介绍 AQS 的使用之前，需要首先说明一点，AQS 同步和 synchronized 关键字同步（以下简称 synchronized 同步）是采用的两种不同的机制。首先看下 synchronized 同步，synchronized 关键字经过编译之后，会在同步块的前后分别形成 monitorenter 和 monitorexit 这两个字节码指令，这两个字节码需要关联到一个监视对象，当线程执行 monitorenter 指令时，需要首先获得获得监视对象的锁，这里监视对象锁就是进入同步块的凭证，只有获得了凭证才可以进入同步块，当线程离开同步块时，会执行 monitorexit 指令，释放对象锁。
