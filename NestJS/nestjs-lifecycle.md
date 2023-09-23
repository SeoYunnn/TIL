# Lifecycle
- 해당 내용은 [NestJS 공식 Documents](https://docs.nestjs.com/fundamentals/lifecycle-events) 기반으로 작성되었습니다.

<br>

## 💭 Lifecycle Events

***📢 해당 애플리케이션 요소인 모듈, 프로바이더, 그리고 컨트롤러가 자신들의 수명동안 사전 정의된 이벤트를 따름***

<br>

- 모든 응용 프로그램 요소에서는 `Nest` 에서 관리하는 수명 주기가 존재
- `Nest` 는 주요 수명주기 이벤트에 대한 가시성과 발생 시 행동할 수 있는 조치 기능을 제공하는 **“수명 주기 후크”** 제공
    - **이벤트가 발생 시 조치 기능 :** 특정 모듈, 프로바이더 또는 컨트롤러에서 등록된 코드를 실행

<br>

### 🧨 Lifecycle hooks

- `NestJS` 의 **Lifecycle hooks** 에는 다음과 같은 주요 메서드가 포함
- **Lifecycle hooks** 를 사용하면 `NestJS` 애플리케이션을 효과적으로 초기화, 정리 및 초기 설정 수행

| hooks                    | descriptions                                                  |
|--------------------------|---------------------------------------------------------------|
| `constructor`            | - 클래스 인스턴스가 생성될 때 호출 <br> - 주로 의존성 주입을 위한 초기 설정 및 리소스 할당에 사용  |
| `onModuleInit`           | - 모듈이 초기화될 때 호출 <br> - 주로 모듈에서 필요한 초기 설정 작업을 수행하는 데 사용        |
| `onModuleDestroy`        | - 모듈이 종료될 때 호출 <br> - 주로 모듈에서 사용한 리소스를 정리하거나 외부 연결을 종료하는 데 사용 |
| `onApplicationBootstrap` | - 어플리케이션 부팅될 때 호출 <br> - 주로 어플리케이션 시작 시 초기화 작업을 수행하는 데 사용     |
| `onApplicationShutdown`  | - 어플리케이션 종료될 때 호출 <br> - 주로 어플리케이션 종료 시 정리 작업을 수행하는 데 사용      |

<br>

## 💭 Lifecycle sequence

📢 ***수명 주기를 사용한다면 ❓
<br> 👉🏻 모듈과 서비스의 적절한 초기화를 계획 가능
<br> 👉🏻 활성 연결을 관리
<br> 👉🏻 종료 신호를 받으면 애플리케이션을 정상적으로 종료 가능***

<br>

- 애플리케이션이 부트스트랩된 시간부터 노드 프로세서가 종료될 때까지 애플리케이션 수명 주기 이벤트 순서
- 생성자를 호출해 인젝터블/컨트롤러를 생성한 후 `Nest` 는 특정 순간에 다음 순서로 라이프 사이클 후크 메소드를 호출

![Untitled](https://github.com/SeoYunnn/TIL/assets/120713987/51b35945-28a5-403c-8889-f2885f1cf39d)

👉🏻 전체 수명주기는 크게 **초기화, 실행, 종료**의 세 단계로 나눌 수 있음

<br>

### 🧨 Lifecycle events

- 수명 주기 이벤트는 애플리케이션 시작 및 종료 중 발생
- `Nest` 는 수명 주기 이벤트에서 모듈, 공급자 및 컨트롤러에 등록된 수명 주기 후크 메서드를 호출
- `Nest` 는 연결 수신을 시작하고, 연결 수신을 중지하기 위해 적절한 기본 메서드도 호출


    
| 수명 주기 후크 방법 | 후크 메서드 호출을 트리거하는 수명 주기 이벤트 |
| --- | --- |
| `onModuleInit()` | 호스트 모듈의 종속성이 해결되면 호출 |
| `onApplicationBootstrap()` | 모든 모듈이 초기화된 후 연결을 수신 대기하기 전에 호출 |
| `onModuleDestroy` * | 종료 신호 (ex: SIGTERM) 가 수신된 후 호출 |
| `beforeApplicationShutdown()` * | 모든 `onModuleDestroy()` 처리기가 완료된 후 호출 (Promise 해결 또는 거부) 완료되면 (Promise 가 해결되거나 거부됨) 모든 기존 연결이 닫힘 (`app.close()` 호출) |
| `onApplicationShutdown()` * | 연결 종료 후 호출 (`app.close()` 해결) |

👉🏻 `*` 로 표시한 후크의 경우 명시적으로 호출하지 않는다면, `**enableShutdownHooks()**` 를 호출해줘야 함

👉🏻 모듈, 서비스, 컨트롤러와 같은 주요 구성 요소 위 **Lifecycle Hooks** 를 구현
    
👉🏻 `app.close()` 를 명시적으로 호출하지 않는 경우 SIGTERM 과 같은 시스템 신호와 함께 작동 선택 필요

<br>

## 💭 Usage
### 1) OnModuleInit

- 각 수명 주기 후크는 **인터페이스**로 표시 👉🏻 `TS` 컴파일 후에는 존재하지 않기 때문에 인터페이스 사용
- 수명 주기 후크를 등록하려면 적절한 인터페이스 구현 진행

    ```tsx
    import { Injectable, **OnModuleInit** } from '@nestjs/common';
    
    @Injectable()
    export class UsersService implements **OnModuleInit** {
      **onModuleInit()** {
        console.log(`The module has been initialized.`);
      }
    }
    ```

  ⌨️ 특정 클래스 (ex : Controller, Provider 또는 Module) 에서 모듈 초기화 중에 호출할 메서드를 등록하려면 다음과 같이 진행

<br>

- 또한 `OnModuleInit` , `OnApplicationBootstrap` 후크를 사용하면 응용 프로그램 초기화 프로세스를 연기 가능

    ```tsx
    async onModuleInit(): Promise<void> {
      await this.fetch();
    }
    ```

  ⌨️ `Promise` 를 반환하거나 메서드를 비동기로 표시하고 메서드 본문에서 비동기 메서드 완료를 기다림

<br>

### **2) OnApplicationShutdown**

- `onModuleDestroy()`, `beforeApplicationShutdown()`, `onApplicationShutdown()` 후크는 종료 단계에서 호출
    - `app.close()`에 대한 명시적 호출에 대한 응답 or SIGTERM과 같은 시스템 신호 수신 시
- 종료 후크를 사용하려면 그에 대한 리스너를 활성화 해야하는데, 이때 `enableShutdownHooks()` 를 호출

    ```tsx
    import { NestFactory } from '@nestjs/core';
    import { AppModule } from './app.module';
    
    async function bootstrap() {
      const app = await NestFactory.create(AppModule);
    
      // shutdown hooks에 대한 리스닝. 이 후크를 무조건 먼저 활성화 해야함
      **app.enableShutdownHooks();**
    
    	await app.listen(3000);
    }
    
    bootstrap();
    ```

  ⌨️ `enableShutdownHooks` 는 리스너를 시작하여 메모리를 소비하기 때문에 `enableShutdownHooks` 는 기본적으로 활성화되어 있지 않음

<br>

- 해당 신호를 첫 번째 매개변수로 사용하여 등록된 `onModuleDestroy()`, `beforeApplicationShutdown()`, `onApplicationShutdown()` 메서드를 순서대로 호출
- 등록된 함수가 Promise 반환을 기다리는 경우 `Nest` 는 Promise 가 해결되거나 거부될 때까지 대기

    ```tsx
    @Injectable()
    class UsersService implements OnApplicationShutdown {
      onApplicationShutdown(signal: string) {
        console.log(signal);
      }
    }
    ```

<br>

- `app.close()`를 호출하면 `Node` 프로세스가 종료되지 않음
    - `onModuleDestroy()` 및 `onApplicationShutdown()` 후크만 트리거
    - 일정 간격, 장기 실행 백그라운드 작업 등이 있는 경우 프로세스가 자동으로 종료되지 않음